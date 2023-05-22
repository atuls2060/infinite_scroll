import React, { useEffect, useState } from 'react'
import Styles from "./home.module.css"
import Navbar from '../components/Navbar'
import ContactItem from '../components/ContactItem';
import Loader from '../components/Loader';
import axios from 'axios';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [contactList, setContactList] = useState([]);

  const getList = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`https://randomuser.me/api/?page=${pageNumber}&results=40`);
      const data = await res.data

      setTimeout(() => {
        setContactList((prev) => {
          return [...prev, ...data.results]
        })
        setLoading(false)
      }, 1000)
    } catch (error) {
      setLoading(false)
      console.log("error", error)
    }
  }

  const handleScroll = async () => {
    try {
      let height = window.innerHeight + document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight
      if (height >= scrollHeight) {
        setPageNumber((prev) => prev + 1)
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    getList()
  }, [pageNumber])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className={Styles.contact_list}>
        {
          contactList.map((item, index) => {
            const picture = item.picture.thumbnail
            const name = `${item.name.first} ${item.name.last}`
            return <ContactItem key={index} picture={picture} name={name} />
          })
        }

      </div>
      {
        loading && <Loader />
      }
    </div>
  )
}

export default Home