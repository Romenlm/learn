export default function content() {
    let promise = new Promise((resolve,reject)=>{
        let str = '张善'
        if(str === ''){
            reject('错误信息')
        }
        resolve(str)
    })
    promise.then((res)=>{
        console.log(res)
    })
}
