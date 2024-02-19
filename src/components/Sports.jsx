import React from 'react'
import Card from './Card'
import swimming from '../MyImages/Swimming.jpg'
import taekwondo from '../MyImages/Taekwondo.jpg'
import football from '../MyImages/Football.jpg'
function Sports() {
  return (
    <>
        <div className="container mt-5 mb-5 pt-5">
            <div className="row">
                <div className="col-lg-4 shadow-lg p-2 ">
                    <div className="m-2"><Card title={<h3>Swimming</h3>} img={<img src={swimming}/>} para='Taekwondo is a Korean martial art with a heavy emphasis on kicks. Taekwondo is characterized by its emphasis on head-height kicks, jumping and spinning kicks, and fast kicking techniques. Quick reaction, concentration sports. ' bg= 'bg-warning'/></div>
                </div>
                <div className="col-lg-4 shadow-lg p-2 ">
                    <Card title={<h3>Taekwondo</h3>} img={<img src={taekwondo}/>} para='Taekwondo is a Korean martial art with a heavy emphasis on kicks. Taekwondo is characterized by its emphasis on head-height kicks, jumping and spinning kicks, and fast kicking techniques. Quick reaction, concentration sports. ' bg= 'bg-success'/>
                </div>
                <div className="col-lg-4 shadow-lg p-2 ">
                    <Card title={<h3>Taekwondo</h3>} img={<img src={football}/>} para='Taekwondo is a Korean martial art with a heavy emphasis on kicks. Taekwondo is characterized by its emphasis on head-height kicks, jumping and spinning kicks, and fast kicking techniques. Quick reaction, concentration sports. ' bg= 'bg-info'/>
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default Sports