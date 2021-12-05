import "../css/Screen.css"
import {Parallax} from "react-parallax";

function Screen(props) {
    return (
        <div id={props.bg} style={{scrollSnapAlign: "start"}}>
            <Parallax className={"Screen"}
                      bgImage={props.bg + '.jpg'}
                      bgImageStyle={{height: "100vh", minWidth: "100%", width: "auto"}}
                      strength={200}
                      renderLayer={(percentage) => (
                          <div style={{
                              maxWidth: 1000,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginTop: 150,
                              marginRight: "auto"
                          }}>
                              <div className={'text'}
                                   style={{
                                       transform: `scale(${Math.min(1, percentage)})`
                                   }}
                              >
                                  <h2>{props.title}</h2>
                                  <p>{props.children}</p></div>
                              <img src={props.pic + '.png'} style={{
                                  position: "absolute",
                                  right: -(1 - Math.min(1, percentage)) * 500,
                                  bottom: "0",
                                  maxWidth: "30vw",
                                  maxHeight: "70vh",
                                  objectFit: "fill",
                                  display: window.innerWidth < 1000 ? "none" : ""
                              }}/>
                          </div>
                      )}/>
        </div>
    )
}

export default Screen;