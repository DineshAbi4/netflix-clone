import "./banner.css"
const Banner = ({img,video,head,para,direction,image,videopng}) => {
  return (
    <div className="banner-container" style={{flexDirection:`${direction}`}}>
        <div className="text-container">
            <h1 >{head}</h1>
            <p >{para}</p>
        </div>
        <div className="img-container" >
        {video &&(<video className={videopng}
        // {`${videopng||""}`}
        autoPlay muted loop  >
  <source src={video} type='video/mp4'  />
  </video>   )} 
 {img && <img className={`${image||""}`} src={img} alt="" />} 
        </div>
 
    </div>
  )
}


export default Banner;