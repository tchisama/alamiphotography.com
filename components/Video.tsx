import React from 'react'

type Props = {}

const Video = (props: Props) => {
  return (
    <div className='my-20'>
        <video autoPlay muted loop controls className=' w-full scale-[1.03]'>
            <source src={"https://scontent-lga3-2.cdninstagram.com/o1/v/t16/f1/m82/08479CC9E5C4E75CD1D34C5166E2D29C_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuMTM3Ni5kYXNoX2Jhc2VsaW5lXzFfdjEifQ&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=109&vs=870601667962833_2324327449&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8wODQ3OUNDOUU1QzRFNzVDRDFEMzRDNTE2NkUyRDI5Q192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dObGwtUmIwMm1RTmhmOENBSzcyc2hER1dmSkticV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvr3xcGj5PY%2FFQIoAkMzLBdAVfa4UeuFHxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfAFkQZHi4epZjIVgT0Y67d5kgWxqiHFCj235zldNcs8bw&oe=652E604E&_nc_sid=1d576d&_nc_rid=9226762111"} type='video/mp4'></source>
        </video>
    </div>
  )
}

export default Video