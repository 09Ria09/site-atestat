import "../css/Screen.css"
import { Parallax, Background } from "react-parallax";

function Screen(props){
    return(
        <div id={props.bg} style={{scrollSnapAlign:"start"}}>
        <Parallax className={"Screen"}
            bgImage={props.bg +'.jpg'}
            bgImageStyle={{height:"100vh", minWidth:"100%", width:"auto"}}
            strength={200}
            renderLayer={(percentage) => (
                <div style={{maxWidth:1000,display:"flex", alignItems:"center", justifyContent:"center", marginTop:150, marginRight:"auto"}}>
                    <div className={'text'}
                        style={{
                            transform: `scale(${Math.min(1, percentage)})`
                        }}
                    ><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                    <img src={props.bg+'.png'} style={{
                        position: "absolute",
                        right: 80/(-percentage)+15,
                        bottom: "0",
                        width: 400,
                        height: "auto"
                    }}/>
                </div>
            )}/>
        </div>
    )
}

export default Screen;