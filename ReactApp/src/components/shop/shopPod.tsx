import React, {useEffect,useState} from 'react';
import '../../App.scss';
import {mediaPrefix,classPrefix,ArticlesItems,conversion} from '../../customExports'
import {Pane} from 'evergreen-ui'

let prefix = classPrefix({view:'Shop'});
let prefixMain = classPrefix({view:'ShopMainPod'});
let prefix0 = classPrefix({view:'ShopPod0'});
let prefix1 = classPrefix({view:'ShopPod1'});

interface Props {
    env:any
}

export default function ShopPod(props:Props) {


    let [articlesItems,setArticlesItems] = useState<ArticlesItems[]>([]);
    useEffect(()=>{
        conversion[0]({
            items:["Dress","Suit","Mirage","Outfit"]
            .map((x:any,i)=>{
                return {
                    title:x,
                    img:"home_"+i+".jpg",
                }
            }),
            setFn:setArticlesItems
        })

        // paste this code when you have finished setting up the backend

        // 
        
    },[])

    let shop ={
        title:{
            text:'Shop All'
        },
        controls:{
            items:["List","Grid"]
            .map((x:any,i)=>{
                return {
                    text:x
                }
            })
        },
        articles:{
            items:articlesItems,
            conversion:conversion[0]
        }
    }

    return (
        <div className={prefix({val:'View'})}>
            <div className={prefixMain({val:''})}>
                <div className={prefix0({val:''})}>
                    <h2>{shop.title.text}</h2>
                    <div>
                    {
                        shop.controls.items.map((x:any,i)=>{
                            return ( 
                                <button 
                                key={i} 
                                className={prefix0({val:'CtrlButton'+(i)})}>
                                    {x.text}
                                </button>
                            )
                        })
                    }
                    </div>
                </div>
                <div className={prefix1({val:''})}>
                    {
                        shop.articles.items.map((x:any,i)=>{
                            return <Pane marginBottom="40px" minWidth="240px" key={i} padding="20px" elevation={3}>
                                <Pane elevation={3}>
                                    <img  src={mediaPrefix({media:x.img.src})} className={prefix1({val:'Img0'})}/>
                                </Pane>
                                <h2>{x.title.text}</h2>
                                <p>{x.desc.text}</p>
                                <button className={prefix1({val:'Button0'})}>{x.cart.text}</button>
                            </Pane>
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}