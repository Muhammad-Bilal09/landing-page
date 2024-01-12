import React from 'react'

export default function services() {
  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <h1 className='text-center'>Our Services</h1>
          <div className='services'>
         <div>
        <div className="card1"  >
              <img src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMGV4cGVyaWVuY2V8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="bg-missing" />
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p> */}
                <button className="btn btn-primary mt-1">user Experince</button>
              </div>
            </div>
         </div>
         <div>
          <div className="card2">
                <img src="https://media.istockphoto.com/id/865230556/photo/graphic-designer-drawing-on-graphics-tablet-at-workplace.jpg?s=612x612&w=0&k=20&c=dGcU-6ibMZ1LmsufKJRkLDQARfmD7EXzzxAGTN1kCng=" className="card-img-top" alt="bg-missing"/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p> */}
                  <button className="btn btn-primary mt-1">creative Design</button>
                </div>
              </div>
         </div>
         <div>
          <div className="card">
                <img src="https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.webp?b=1&s=170667a&w=0&k=20&c=GnW36mPEYr3TRpPZNLtT75u8v2HOczvRxGckWUN3hVg=" className="card-img-top" alt="bg-missing" />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p> */}
                  <button className="btn btn-primary">Explore Everything</button>
                </div>
              </div>
         </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
