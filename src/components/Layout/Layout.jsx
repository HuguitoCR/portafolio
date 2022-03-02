import Narbar from '../Narbar/Narbar.jsx'
import Footer from '../Footer/Footer.jsx'
 
 function Layout ({ children }) {
  return(
    <>
         <Narbar />
         {children}
         <Footer />
    </>
  )
}




export default Layout;