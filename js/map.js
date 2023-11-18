const posText = document.getElementById("position");
const cursor = document.getElementById("cursor");

function changeMouseOnDown(msdown) {
    cursor.style.borderWidth = (msdown) ? "3px" : "2px";
    cursor.style.borderColor = (msdown) ? "black" : "white";
}

// Mouse events
window.addEventListener("mousemove", function (e) {
    const mouseX = e.x;
    const mouseY = e.y;

    posText.innerHTML = `Mouse posX: ${mouseX}   posY: ${mouseY}`;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

});
window.addEventListener("mousedown", function (e) {
    changeMouseOnDown(true);
});
window.addEventListener("mouseup", function (e) {
    changeMouseOnDown(false);
});

const PARENT = 100;
const CHILD = 101;
// Map data
const mapDataSet = [
    {
        role: PARENT,
        name: "Main entrance", 
        lat: 1143, lon: 79,
        desc: "The main entrance. There's really nothing special here. This serves as the starting/default node for backend algorithms.",
        child_nodes: []
    },
    {
        role: PARENT,
        name: "Indoor stadium",
        lat: 1050, lon: 169,
        desc: "",
        child_nodes: [
            {
                role: CHILD,
                name: "Entrance 1",
                lat: 1096, lon: 235,
                desc: ""
            },
            {
                role: CHILD,
                name: "Entrance 2",
                lat: 973, lon: 195,
                desc: ""
            }
        ]

    },
    {
        role: PARENT,
        name: "Outdoor basketball court",
        lat: 1146, lon: 141,
        desc: "",
        child_nodes: []
    },
    {
        role: PARENT,
        name: "Hall A",
        lat: 1082, lon: 460,
        desc: "",
        child_nodes: [
            {
                role: CHILD,
                name: "Entrance",
                lat: 1118, lon: 458,
                desc: ""
            }
        ]
    },
    {
        role: PARENT,
        name: "Facility C1",
        lat: 1057, lon: 543,
        desc: "",
        child_nodes: []
    },
    {
        role: PARENT,
        name: "Facility C2",
        lat: 1043, lon: 587,
        desc: "",
        child_nodes: []
    },
    {
        role: PARENT,
        name: "Facility C3",
        lat: 1015, lon: 631,
        desc: "",
        child_nodes: []
    },
    {
        role: PARENT,
        name: "Facility C4",
        lat: 983, lon: 667,
        desc: "",
        child_nodes: []
    },
    {
        role: PARENT,
        name: "Facility C5",
        lat: 942, lon: 694,
        desc: "",
        child_nodes: []
    },
    {
        role: PARENT,
        name: "Facility C6",
        lat: 897, lon: 712,
        desc: "",
        child_nodes: []
    },
    {
        role: PARENT,
        name: "Cafeteria",
        lat: 770, lon: 419,
        desc: "",
        child_nodes: [
            {
                role: CHILD,
                name: "Main entrance",
                lat: 803, lon: 448,
                desc: ""
            },
            {
                role: CHILD,
                name: "Side entrance",
                lat: 723, lon: 457,
                desc: ""
            }
        ]
    },
    {
        role: PARENT,
        name: "Dormitory (Entrance)",
        lat: 726, lon: 538,
        desc: "",
        child_nodes: [
            {
                role: CHILD,
                name: "Dormitory 1",
                lat: 624, lon: 724,
                desc: ""
            },
            {
                role: CHILD,
                name: "Dormitory 2",
                lat: 628, lon: 641,
                desc: ""
            },
            {
                role: CHILD,
                name: "Dormitory 3",
                lat: 633, lon: 566,
                desc: ""
            },
            {
                role: CHILD,
                name: "Dormitory 4",
                lat: 639, lon: 494,
                desc: ""
            }
        ]
    },
    {
        role: PARENT,
        name: "Lake",
        lat: 1150, lon: 794,
        desc: "",
        child_nodes: []
    }
    
];

function loadHotSpot(hotspot) {
    console.log(`loadHotSpot: Loaded hotspot ${toString(hotspot)}`);
    console.log(`loadHotSpot: Name: ${hotspot["name"]}`);
    //hotspot.style.backgroundColor = "crimson";
}

function generateMapHotSpots(dataset) {
    let i = 0;
    for (hotspot of dataset) {
        const hsDiv = document.createElement(`div`);
        hsDiv.className = `hotspot_${i}`;
        hsDiv.setAttribute('dataset', toString(hotspot));
        hsDiv.style.position = "absolute";
        hsDiv.style.width = "20px";
        hsDiv.style.height = "20px";
        hsDiv.style.borderRadius = "50%";
        hsDiv.style.backgroundColor = "aqua";
        hsDiv.style.left = hotspot["lat"] + "px";
        hsDiv.style.top = hotspot["lon"] + "px";
        hsDiv.style.zIndex = "0";

        hsDiv.addEventListener("click", loadHotSpot, hotspot);
        
        console.log(hsDiv);
        document.body.appendChild(hsDiv);
        
        i++;
    }
}

generateMapHotSpots(mapDataSet);
