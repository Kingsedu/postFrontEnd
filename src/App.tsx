import './App.css'
import PostList from './components/postList/PostList'
import MainHeader from './components/mainHeader/MainHeader'
import { useState } from 'react'
function App() {
   const [modalIsVisible, setModalIsVisible] = useState<boolean>(true);
   const showModalHandler = () => {
     setModalIsVisible(true);
   }
   const  hideModalHandler = () =>  {
        setModalIsVisible(false);
    }
  
  return (
    <main>
      <MainHeader onCreatePost={ showModalHandler }/>
      <PostList 
      isPosting={modalIsVisible} 
      onStopPosting={hideModalHandler}
      />
    </main>
  )
}

export default App
