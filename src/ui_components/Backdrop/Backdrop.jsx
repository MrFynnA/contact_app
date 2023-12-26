import '../Backdrop/Backdrop.css'

export const Backdrop=(props)=>{
      const{onClick}=props
      return <div onClick={onClick} className="backdrop"></div>
}

