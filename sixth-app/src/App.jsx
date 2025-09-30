import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'

// // // This is used Props method
// What is props in React?

// ✅ Props = Properties

// In React, props are a way to pass data from a parent component to a child component.

// They are like function parameters in JavaScript.

// props are read-only (you cannot directly change them inside the child).

// Example with your code

// Parent component → App
// Child component → Student

// <Student name="Shriram" email="ram07@gmail.com" mobile="9895652652" city="Pune" />
// 👉 Here, App is passing name, email, mobile, and city as props to Student.





// This is used Props method
// function App() {

//   const [count, setCount] = useState(0)

//   return (
//     <div className='flex p-3 gap-5 flex-wrap justify-center' >
//       <Student name="Ram" email="ram07@gmail.com" mobile="9895652652" city="Pune" />
//       <Student name="Abhijeet Narsale" email="abhi05@gmail.com" mobile="9959556552" city="Solapur" />
//       <Student name="Om Divse" email="om455@gmail.com" mobile="854548452" city="Mumbai" />
//       <Student name="Shreyash Patil" email="shreyash003@gmail.com" mobile="9826559922" city="Dubai" />
//       <Student />
//       <Student />
//       <Student />
//       {/* <Student />
//       <Student />
//       <Student />
//       <Student />  */}



//     </div>
//   )
// }
// ==================================================================================================================================

// // This is used Map method
// In React, map() is mostly used to render lists of elements / components dynamically.
// In React, the map() method is not something React created — it’s the JavaScript array map() method —
//  but it is commonly used in React to render lists of elements or components dynamically. ✅

// student.map(stud =>
//   <Student name={stud.name} email={stud.email} mobile={stud.mobile} city={stud.city} />
// )
// 👉 map is used to loop through the student array and return a new array of JSX elements(<Student /> components).










// This is used Map method
function App() {

  //assumed that this data is coming from backend api
  const student = [
    { name: "Shriram", email: "ram07@gmail.com", mobile: "9895652652", city: "Pune",laptop:"Dell"},
    { name: "Raj", email: "ram07@gmail.com", mobile: "9895652652", city: "Pune" },
    { name: "Sitaram555", email: "ram07@gmail.com", mobile: "9895652652", city: "Pune",laptop:"Hp" },
    { name: "Ranjeet", email: "ram07@gmail.com", mobile: "9895652652", city: "Pune",laptop:"Apple" },
  ];
  const [count, setCount] = useState(0)

  return (
    <div className='flex p-3 gap-5 flex-wrap justify-center' >
      {
        student.map((stud,index) => <Student key={index} name={stud.name} email={stud.email} mobile={stud.mobile} city={stud.city} laptop={stud.laptop} />) //Console error delete used in this line index 


      }
      <Student name="Ram" email="ram@gmail.com" mobile="8464945565" city="Puna" laptop="Lenovo" />
       <Student name="Shreyash" email="shreyash@gmail.com" mobile="8464945565" city="Puna" />
        <Student name="Pooja" email="pooja@gmail.com" mobile="8464945565" city="Puna" laptop="Asus" />
         <Student name="Shweta" email="shweta@gmail.com" mobile="8464945565" city="Puna" />





    </div>
  )
}


export default App
