export  function mediaPrefix(devObj:any){
    let {media} = devObj
    return "./assets/media/"+media
}

export function classPrefix(devObj:any){
    let {view} = devObj
    let prefix = "a_p_p_"+view 
    return (devObj:any)=>{
        let {val} = devObj
        return prefix+val
    }
}

// dev additions
export interface ArticlesItems{
    title:{
        text:string
    },
    cart:{
        text:string
    },
    desc:{
        text:string
    },
    img:{
        src:string
    }
}

export let conversion = {
    0:(devObj:any)=>{
        let {items,setFn} = devObj
        let newItems = items.map((x:any,i:number)=>{
            return {
                title:{
                    text:x.title
                },
                cart:{
                    text:'Add to Cart'
                },
                desc:{
                    text:x.desc
                },
                img:{
                    src:x.img
                }                
            }
        })
        setFn(newItems)
    }
}