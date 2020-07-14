import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages/Pages';
import * as firebase from 'firebase/app';

class App extends Component {
    
    constructor(){
    super()
    this.state = {

       FirstName : 'fefe',
       obj : {},
       s : 'c',
       North :
        ['เชียงราย','เชียงใหม่' 
        ,'น่าน'
        ,'พะเยา' 
        ,'แพร่' 
        ,'แม่ฮ่องสอน' 
        ,'ลำปาง' 
        ,'ลำพูน' 
        ,'อุตรดิตถ์'],
        NorthEast : 
        [   'กาฬสินธุ์' 
            ,'ขอนแก่น' 
            ,'ชัยภูมิ' 
            ,'นครพนม' 
            ,'นครราชสีมา' 
            ,'บึงกาฬ' 
            ,'บุรีรัมย์' 
            ,'มหาสารคาม' 
            ,'มุกดาหาร' 
            ,'ยโสธร' 
            ,'ร้อยเอ็ด' 
            ,'เลย' 
            ,'สกลนคร' 
            ,'สุรินทร์' 
            ,'ศรีสะเกษ' 
            ,'หนองคาย' 
            ,'หนองบัวลำภู' 
            ,'อุดรธานี' 
            ,'อุบลราชธานี' 
            ,'อำนาจเจริญ' 

        ],
        Middle :
        [    'กรุงเทพมหานคร'
            ,'กำแพงเพชร' 
            ,'ชัยนาท' 
            ,'นครนายก' 
            ,'นครปฐม' 
            ,'นครสวรรค์' 
            ,'นนทบุรี' 
            ,'ปทุมธานี' 
            ,'พระนครศรีอยุธยา' 
            ,'พิจิตร' 
            ,'พิษณุโลก' 
            ,'เพชรบูรณ์' 
            ,'ลพบุรี' 
            ,'สมุทรปราการ' 
            ,'สมุทรสงคราม' 
            ,'สมุทรสาคร' 
            ,'สิงห์บุรี' 
            ,'สุโขทัย' 
            ,'สุพรรณบุรี' 
            ,'สระบุรี' 
            ,'อ่างทอง' 
            ,'อุทัยธานี'
            ,'จันทบุรี' 
            ,'ฉะเชิงเทรา' 
            ,'ชลบุรี' 
            ,'ตราด' 
            ,'ปราจีนบุรี' 
            ,'ระยอง' 
            ,'สระแก้ว'
            ,'กาญจนบุรี' 
            ,'ตาก' 
            ,'ประจวบคีรีขันธ์' 
            ,'เพชรบุรี' 
            ,'ราชบุรี' 

        ],
        South :
        [
            'กระบี่' 
            ,'ชุมพร' 
            ,'ตรัง' 
            ,'นครศรีธรรมราช' 
            ,'นราธิวาส' 
            ,'ปัตตานี' 
            ,'พังงา' 
            ,'พัทลุง' 
            ,'ภูเก็ต' 
            ,'ระนอง' 
            ,'สตูล' 
            ,'สงขลา' 
            ,'สุราษฎร์ธานี' 
            ,'ยะลา' 
             
        ]

    }
    }

    componentDidMount() {

            const rootRef = firebase.database().ref('Mastersheet')
            // console.log(rootRef)
         
            const nameRef = rootRef.child('FirstName')
            // console.log(nameRef)
            rootRef.on('value', (snap) => {
                console.log(snap.val())
                // alert(snap.val())
              
                this.setState({

                obj : snap.val(),
                s : 'z',
                FirstName : 'zzzzzz',
                North : North
    
            })




            console.log(this.state.North)    
            console.log((this.state.obj))
            console.log(this.state.s)
            // const a = Object.entries(this.state.obj)
            // console.log(a)
            // console.log(obj)
            // console.log(snap); 
            // console.log(this.state.FirstName)    
            console.log((this.state.obj[2].Rank))
            console.log(this.state.s)
            console.log(this.state.FirstName)

            let result = Object.entries(this.state.obj);
            result.map((item, index)=>{
                  console.log('key is:- ', item[0], ' and value is:- ', item[1]); 
            });
               
            


                  let N =  Object.entries(this.state.obj).filter(function(province) {


                    province.map((item)=>{
                        
                       console.log(this.state.North)
                        
                  })
               
                    
                });
                

          
            });
           
        console.log(this.state.obj)
        console.log(this.state.s)
        console.log(this.state.FirstName)
    }


    render(){
        return (
            <BrowserRouter>
                <div>
                    <Pages />
                    
                    {Object.keys(this.state.obj).map( (item,i) => <div key={i}>{item}</div>)}
                      {Object.keys(this.state.obj).map( (item,i) => <div key={i}>{item}</div>)
}           
                     {Object.entries(this.state.obj).map(([key, value]) => console.log(`${value.LastName}`))}  
{Object.entries(this.state.obj).map(([key, value]) => <h1 key={value}>{value.FirstName[1]}</h1>)}
                     <h1>fenuifneufnufeffei</h1>

                        {
                                    Object.entries(this.state.obj).map((item)=>{
                                        console.log('key is:- ', item[0], ' and value is:- ', item[1].Image); 
                                        
                                  })
                                    


                        }



{
                                    Object.entries(this.state.obj).map((item)=>


                                      <img src ='{item[1].Image} 'alt="Girl in a jacket"/>
                                        
                                  )
                                    


                        }
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
