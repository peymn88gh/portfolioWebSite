import { useState } from "react"

export const AsyncImage = ({ inView, ...imageProps }) => {
    const [status, setStatus] = useState('loading')
  
    return (
      <>
        { status === 'loading' && (<div >loading...</div>)}
        { inView && (
          <img 
            {...imageProps}
            onLoad={() => setTimeout(()=>setStatus('loaded'),5000)}
            onError={() => setStatus('failed')}
          />
        )}
        { status === 'failed' && (<div>error</div>)}
      </>
    )
  }