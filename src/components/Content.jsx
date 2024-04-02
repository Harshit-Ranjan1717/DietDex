import React from 'react'

const Content = (props) => {
   
    const {heading,texts,desc,id}=props;
    console.log(id);
  return (
    <div className="ml-20 w-[60%]  ">
    <div className={`flex justify-center items-center flex-col w-96 gap-3 ${id%2===0?"mr-14 ml-auto":"ml-0 mr-auto"}`}>
      <p className="font-semibold text-4xl pb-6">{heading}</p>
      <p>{desc}</p>
      <div className="flex mt-3">
        {
            texts.map((text)=>(
                <div key={text.sub_texts} className="flex  items-center gap-2">
                <span>
                  <img
                    className="w-16"
                    src={
                      "https://static.wixstatic.com/media/197d85_6a9b4ef9117d48f4b64b660680d35228~mv2.png"
                    }
                    alt=""
                  />
                </span>
                <p>{text.sub_texts}</p>
              </div>
            ))
        }

      </div>
    </div>
  </div>

  )
}

export default Content
