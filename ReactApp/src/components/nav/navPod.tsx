import React from 'react';
import '../../App.scss';
import {mediaPrefix,classPrefix} from '../../customExports'


let prefix = classPrefix({view:'Nav'});
let prefixMain = classPrefix({view:'NavMainPod'});
let prefix0 = classPrefix({view:'NavPod0'});

interface Props {

}


export default function NavPod(props:Props){


    let nav = {
        title:{
            text:"mkimbe",
            subText:"Online"
        },
        links:{
            items:["Home","About","FAQ","Shop"]
            .map((x:any,i)=>{
                return {
                    text:x
                }
            })
        },
        iconLinks:{
            items:["nav_0.png","nav_1.png","nav_2.png"]
            .map((x:any,i)=>{

                let url = mediaPrefix({media:x})
                let styleBackgroud = "url(../../"+ url + ")"
                
                return {
                    style:{

                    }
                }
            })
        }
    }
    return(
        <div className={prefixMain({val:''})}>
            <div className={prefix0({val:''})}>
                <div className={prefix0({val:'Item0'})}>
                    <h3 className={prefix0({val:'Title0'})}>
                        {nav.title.text}
                        <span className={prefix0({val:'Title1'})}>{nav.title.subText}</span>
                    </h3>
                    <div className={prefix0({val:'Item1'})} >
                    {
                        nav.links.items.map((x:any,i)=>{
                            return <a key={i} className={prefix0({val:'Link0'})}>{x.text}</a>
                        })
                    }
                    </div>
                    <div className={prefix0({val:'Item2'})} >
                    {
                        nav.iconLinks.items.map((x:any,i)=>{
                            return <div 
                            className={prefix0({val:'Link'+(i+1)  })}
                            key={i}  style={x.style}></div>
                        })
                    }
                    </div>
                </div>
                
            </div>
        </div>
    )
}