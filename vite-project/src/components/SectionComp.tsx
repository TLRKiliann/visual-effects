import React from 'react'

type TextProps = {
  className: string;
  title: string;
  paragraph: string;
}

export default function SectionComp(props: TextProps) {
  
  const handleClick = () => {
    alert("Clicked !");
  }

  return (
    <>
      <section className={props.className}>
        <article>
          <h2>{props.title}</h2>
          <div className='paragraph-menu'>
            <p>{props.paragraph}</p>
            <button type="button" onClick={handleClick}>Read</button>
          </div>
        </article>
      </section>
    </>
  )
}
