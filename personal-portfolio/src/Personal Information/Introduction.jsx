import { useState, useEffect } from 'react'
import './description.txt'

let file = ['./description.txt']

export default function Introduction() {
  // let [text, setText] = useState('')
  // useEffect(() => {
  //   async function main() {
  //     const file = await fetch(file);
  //     fetch(file).then((response) => response.text()).then((text) => {setText(text)})
  //   }
  //   main();
  // }, [setText])

    return (
      <>
        <h1>Introduction</h1>
        <p>My name is Ethan, I am currently a 4th year student at THE Ohio State University studying Management Information Systems.
            I have always had an interest in creating things and after finding code to be a wonderful outlet, I have been obcessed ever since.
            In my free time I am competitive powerlifter, avid movie nerd and skier, a book worm, and occasional gamer.
            I am currently working as a Software Intern at Neudesic, a Microsoft Gold Partner and tech consulting firm as an intern where I hope
            to learn how to build a fullstack application using react.
            I am hoping to find a full time position in the tech industry after graduation in December 2022.
        </p>
        <p></p>
      </>
    )
  }