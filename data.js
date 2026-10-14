var APP_DATA = {
  "scenes": [
    {
      "id": "0-ciel",
      "name": "Ciel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04264646862173649,
          "pitch": 0.5988834603326474,
          "rotation": 6.283185307179586,
          "target": "1-centre-cours"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-centre-cours",
      "name": "Centre cours",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2057660010253777,
          "pitch": -0.2660315984990511,
          "rotation": 0,
          "target": "0-ciel"
        },
        {
          "yaw": 0.08937841741634323,
          "pitch": -0.3506730601845405,
          "rotation": 0,
          "target": "0-ciel"
        },
        {
          "yaw": 0.33491872518612276,
          "pitch": 0.2287040097958375,
          "rotation": 0,
          "target": "2-terrasse-glycine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-terrasse-glycine",
      "name": "Terrasse glycine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6176710209713576,
          "pitch": 0.003607014010851728,
          "rotation": 0,
          "target": "1-centre-cours",
          "targetYaw": 3,
          "targetPitch": 0
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
