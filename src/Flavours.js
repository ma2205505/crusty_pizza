import React from 'react'
import Menu1 from './components/Menu1'

function Flavours() {
    const data = [

        {
            id: 1,
            img: "https://maestropizzini.modeltheme.com/wp-content/uploads/2018/01/pizza6.png",
            dec: "gnsyugdyusgdsygdsgdsg hello",
            title: 'Learn More',
        },
        {

            img: "https://images.unsplash.com/photo-1687367480551-70f0317b6dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            dec: "gnsyugdyusgdsygdsgdsg",
            title: 'Learn More',
        },
        {

            img: "https://images.unsplash.com/photo-1687367480551-70f0317b6dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            dec: "gnsyugdyusgdsygdsgdsg",
            title: 'Learn More',
        },
        {

            img: "https://images.unsplash.com/photo-1687367480551-70f0317b6dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            dec: "gnsyugdyusgdsygdsgdsg",
            title: 'Learn More',
        },
        {

            img: "https://images.unsplash.com/photo-1687367480551-70f0317b6dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            dec: "gnsyugdyusgdsygdsgdsg",
            title: 'Learn More',
        },
        {

            img: "https://images.unsplash.com/photo-1687367480551-70f0317b6dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            dec: "gnsyugdyusgdsygdsgdsg",
            title: 'Learn More',
        },
        {

            img: "https://images.unsplash.com/photo-1687367480551-70f0317b6dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            dec: "gnsyugdyusgdsygdsgdsg",
            title: 'Learn More',
        },
        {

            img: "https://images.unsplash.com/photo-1687367480551-70f0317b6dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            dec: "gnsyugdyusgdsygdsgdsg",
            title: 'Learn More',
        },

    ]
    return (
        <>
            {/* <div className="container">
                <div className="col-lg-3">
                    <div className="card"> */}
            {data.map((item) => {
                return (
                    <div className="col-lg-12 ">
                        <Menu1
                            box={item.id}
                            image={item.img}
                            Des={item.dec}
                            title={item.title}
                        />
                    </div>
                )
            })}
            {/* </div>
                </div>
            </div> */}
        </>
    )
}

export default Flavours
