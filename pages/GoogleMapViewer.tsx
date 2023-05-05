import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript, useLoadScript, Polyline  } from '@react-google-maps/api';
import Head from "next/head";

const buhangin2jplaurel = [{ lng:
  125.66000536860685,
  lat: 7.1493661841889065
},
{ lng:
  125.65995090310173,
  lat: 7.149026358681311
},
{ lng:
  125.64144967375535,
  lat: 7.131476523774168
},
{ lng:
  125.63283336958949,
  lat: 7.1249811713906865
},
{ lng:
  125.62405159494125,
  lat: 7.1151906177383495
},
{ lng:
  125.61648954194112,
  lat: 7.109870713179276
},
{ lng:
  125.61336546639717,
  lat: 7.10875677359563
},
{ lng:
  125.61470932552044,
  lat: 7.1012061330563085
},
{ lng:
  125.6150761068605,
  lat: 7.096008793700491
},
{ lng:
  125.61547272829512,
  lat: 7.094662969227386
},
{ lng:
  125.61597595982892,
  lat: 7.094603234373224
},
{ lng:
  125.61613116514036,
  lat: 7.094899318077012
},
{ lng:
  125.61589233697362,
  lat: 7.095363654483236
},
{ lng:
  125.61545865983254,
  lat: 7.095247327825945
},
{ lng:
  125.61072085113216,
  lat: 7.092245546327447
},
{ lng:
  125.61028792372548,
  lat: 7.091683029310232
},
{ lng:
  125.60997342064036,
  lat: 7.0908729052138995
},
{ lng:
  125.61010666225411,
  lat: 7.088692867108776
},
{ lng:
  125.61038853225386,
  lat: 7.087046490723111
},
{ lng:
  125.61234072568601,
  lat: 7.083794534410615
},
{ lng:
  125.61333319749986,
  lat: 7.07655043223113
},{ lng:
  125.61251676436541,
  lat: 7.073612526565782
},
{ lng:
  125.6112721330482,
  lat: 7.073486748486019
},
{ lng:
  125.61103415183669,
  lat: 7.073517467124859
},
{ lng:
  125.61091095828243,
  lat: 7.073320506700085
},
{ lng:
  125.6090289533027,
  lat: 7.066523915524797
},
{ lng:
  125.60832834830455,
  lat: 7.065170870585135
},
{ lng:
  125.60987432188233,
  lat: 7.064003382231419
},
{ lng:
  125.609594330194,
  lat: 7.063146102567728
},
{ lng:
  125.60937371662209,
  lat: 7.063041880545043
},
{ lng:
  125.60693422898561,
  lat: 7.064469445888022
},
{ lng:
  125.60173901002645,
  lat: 7.069109540575852
},
{ lng:
  125.60249922686887,
  lat: 7.069760257072204
},
{ lng:
  125.6035430366174,
  lat: 7.06885047273407
},
{ lng:
  125.60899944067285,
  lat: 7.073424923735914
},
{ lng:
  125.60910352382746,
  lat: 7.073786749807965
},
{ lng:
  125.6092192949734,
  lat: 7.074166758282715
},
{ lng:
  125.60945440674925,
  lat: 7.074566141345457
},
{ lng:
  125.60972185202604,
  lat: 7.074909195435282
},
{ lng:
  125.6102029433776,
  lat: 7.0751775914611414
},
{ lng:
  125.61081216727268,
  lat: 7.075384731358909
},
{ lng:
  125.61139776870891,
  lat: 7.07543195006221
},
{ lng:
  125.61225451198766,
  lat: 7.076067511790555
},
{ lng:
  125.61299688266496,
  lat: 7.076576103827904
},
{ lng:
  125.61336127628721,
  lat: 7.076567862136727
}
];

  const mapStyles = {
    height: '90vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 7.087806, 
    lng: 125.611167,
  };
  interface Location {
    lat: number;
    lng: number;
  }

const GoogleMapViewer: React.FC<{}> = () =>{
  const [btn, setBtn] = useState(false);
  const [route, setRoute] = useState<Location[]>([{ lat: 0, lng: 0 }]);

  const handleButtonClick = (event:any) => {
    if(event.target.name==="buhangin2jplaurel"){
      setRoute(buhangin2jplaurel)
    }else{
      setRoute([])
    }
    setBtn(!btn)
  };

useEffect(()=>{
  setRoute(buhangin2jplaurel)
},[])

  return (
    <>
      <Head>
        <title>Sakay Davao</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
        
<div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY||"default"}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13.7} center={defaultCenter}>
      {btn && <Polyline path={buhangin2jplaurel} options={{ strokeColor: "#FF55BB" }}  />}
      </GoogleMap>
      
    <div  className="z-50">
    <button name="buhangin2jplaurel" className="btn bg-black text-white p-5 rounded-lg" onClick={handleButtonClick}>
        {btn ? '' : 'Click me to view Buhangin to JP Laurel Route'}
      </button>
    </div>
    </LoadScript>
</div>
      </>
  )
}

export default GoogleMapViewer;