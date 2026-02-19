const programTable = document.querySelector('#body-table');
const programTable2 = document.querySelector('#body-table2');
const programTable3 = document.querySelector('#body-table3');

const colors = ['col1', 'col2','col3','col4','col5','col6','col7','col8', 'col9', 'col10', 'col11', 'col12', 'col13', 'col14']


document.addEventListener('DOMContentLoaded', ()=>{
    participantes.forEach(participante =>{
        addParticipant(programTable, participante);
    })
    
    participantes2.forEach(participante =>{
        addParticipant(programTable2, participante);
    })
    
    participantes3.forEach(participante =>{
        addParticipant(programTable3, participante);
    })
    
    addFinalRow(programTable3, '18:30');
})

function addFinalRow(table,hora){
    const finalRow = document.createElement('tr');
    finalRow.innerHTML = 
    `
    <td>${hora}</td>
    <td> - </td>
    <td> - </td>
    <td>Closing remarks and awards</td>
    `;
    table.appendChild(finalRow);
}
function addParticipant(table, participante){
    const {NOMBRE, TITULO, SLOT, NOMBRE_SLOT, HORA, NUMERO} = participante;
    hora_short = HORA.substr(0, 5)
    const row = document.createElement('tr');
    row.classList.add(colors[parseInt(SLOT)-1]);
    if(NOMBRE!==" "){
        row.innerHTML = 
        `
        <td>${hora_short}</td>
        <td> ${SLOT} </td>
        <td> ${NUMERO} </td>
        <td> <strong>${NOMBRE}.</strong> <i>${TITULO}.</i></td>
        `;
    } else{
        row.innerHTML = 
        `
        <td>${hora_short}</td>
        <td> ${SLOT} </td>
        <td> ${NUMERO} </td>
        <td> ${TITULO}.</td>
        `;
    }
    table.appendChild(row);
}

const participantes =  [
        {
         "NOMBRE": "Elena García de Lamo",
         "TITULO": "Data-Driven Stochastic Modeling of Fish Schools in Confined Spaces",
         "SLOT": 1,
         "NOMBRE_SLOT": " ",
         "HORA": "15:30:00",
         "NUMERO": 1
        },
        {
         "NOMBRE": "Marcos Martínez Jiménez",
         "TITULO": "Study of the origin of interstellar molecular complexity through explainable machine learning and statistical models",
         "SLOT": 1,
         "NOMBRE_SLOT": " ",
         "HORA": "15:43:00",
         "NUMERO": 2
        },
        {
         "NOMBRE": "Federico Pérez González",
         "TITULO": "Flows developed in cavities driven by rotating of the lateral walls",
         "SLOT": 1,
         "NOMBRE_SLOT": " ",
         "HORA": "15:56:00",
         "NUMERO": 3
        },
        
        {
           "NOMBRE": " ",
           "TITULO": "",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "",
           "NUMERO": "-"
          },
        
        {
        "NOMBRE": "Ariadna Fosch",
        "TITULO": "Diversification of global food trade partners increased inequalities in the exposure to shock risks",
        "SLOT": 2,
        "NOMBRE_SLOT": " ",
        "HORA": "16:10:00",
        "NUMERO": 4
        },
        {
        "NOMBRE": "Joan Cucurull Benet",
        "TITULO": "Quantum dynamics of Solitons in a relativistic field equation",
        "SLOT": 2,
        "NOMBRE_SLOT": " ",
        "HORA": "16:23:00",
        "NUMERO": 5
        },
        {
        "NOMBRE": "Miguel Torrejón Ríos",
        "TITULO": "Determination of the dissociation line and driving force for nucleation of the multiple occupied hydrogen hydrate from computer simulation.",
        "SLOT": 2,
        "NOMBRE_SLOT": " ",
        "HORA": "16:36:00",
        "NUMERO": 6
        },
            
            {
           "NOMBRE": " ",
           "TITULO": "",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "",
           "NUMERO": "-"
          },
            
        {
         "NOMBRE": "Jorge García",
         "TITULO": "Elasticity in amyloid filaments through thermal fluctuations",
         "SLOT": 3,
         "NOMBRE_SLOT": " ",
         "HORA": "16:50:00",
         "NUMERO": 7
        },
        {
         "NOMBRE": "Miguel Chamorro",
         "TITULO": "Hydrodynamic interactions in binary-mixture colloidal monolayer",
         "SLOT": 3,
         "NOMBRE_SLOT": " ",
         "HORA": "17:03:00",
         "NUMERO": 8
        },
        {
         "NOMBRE": "Carmen Cara Galdeano",
         "TITULO": "Coarse-grained simulations of multiresponsive microgels",
         "SLOT": 3,
         "NOMBRE_SLOT": " ",
         "HORA": "17:16",
         "NUMERO": 9
        },
        
        {
            "NOMBRE": " ",
            "TITULO": "Descanso",
            "SLOT": "-",
            "NOMBRE_SLOT": "-",
            "HORA": "17:30:00",
            "NUMERO": "-"
           },
        {
         "NOMBRE": "Gerard Argany",
         "TITULO": "Opinion dynamics under large-scale polarizing events",
         "SLOT": 4,
         "NOMBRE_SLOT": " ",
         "HORA": "17:50:00",
         "NUMERO": 10
        },
        {
         "NOMBRE": "Rodrigo Fernández-Quevedo García",
         "TITULO": "Surface tension and effective temperature of a Motility Induced Phase Separation of Active Brownian Particles",
         "SLOT": 4,
         "NOMBRE_SLOT": " ",
         "HORA": "18:03",
         "NUMERO": 11
        },
        {
         "NOMBRE": "Parsa Dadashi",
         "TITULO": "Grafting effect on electrical conductivity of copolymer nanocomposites",
         "SLOT": 4,
         "NOMBRE_SLOT": " ",
         "HORA": "18:16:00",
         "NUMERO": 12
        },
        
        {
           "NOMBRE": " ",
           "TITULO": "",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "",
           "NUMERO": "-"
          },
        
        {
        "NOMBRE": "Núria Velasco",
        "TITULO": "Using logconcave functions to fit power law distributions",
        "SLOT": 5,
        "NOMBRE_SLOT": " ",
        "HORA": "18:30:00",
        "NUMERO": 13
        },
        {
        "NOMBRE": "Cosmin Dicu",
        "TITULO": "Formation, Stability, and Interfacial Properties of Icosahedral Quasicrystals",
        "SLOT": 5,
        "NOMBRE_SLOT": " ",
        "HORA": "18:43:00",
        "NUMERO": 14
        },
        {
        "NOMBRE": "Francisco Orihuela Olea",
        "TITULO": "Optimization of the absorption of random particulate materials",
        "SLOT": 5,
        "NOMBRE_SLOT": " ",
        "HORA": "18:56:00",
        "NUMERO": 15
        },
        
        
       ]



const participantes2 = [
    {
        "NOMBRE": "Carla Alejandre",
        "TITULO": "Polymerization, replication and evolution of RNA in the origin of life",
        "SLOT": 6,
        "NOMBRE_SLOT": " ",
        "HORA": "15:30:00",
        "NUMERO": 16
       },
       {
        "NOMBRE": "David Mellado-Alcedo",
        "TITULO": "Stability of nonlinear Dirac solitons under the action of external potentials",
        "SLOT": 6,
        "NOMBRE_SLOT": " ",
        "HORA": "15:43:00",
        "NUMERO": 17
       },
       {
        "NOMBRE": "Enrique Rozas",
        "TITULO": "Instanton theory and fluctuation corrections to the thermal nucleation rate of a ferromagnetic superfluid",
        "SLOT": 6,
        "NOMBRE_SLOT": " ",
        "HORA": "15:56:00",
        "NUMERO": 18
       },
      
      {
           "NOMBRE": " ",
           "TITULO": "",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "",
           "NUMERO": "-"
          },
      
        {
        "NOMBRE": "Raúl Molina-Prados Lallena",
        "TITULO": "On the emergence of collective order in angular dependence Vicsek Model",
        "SLOT": 7,
        "NOMBRE_SLOT": " ",
        "HORA": "16:10:00",
        "NUMERO":19
        },
        {
        "NOMBRE": "Yahor Savich",
        "TITULO": "A protein-DNA surface hydrogel mechanically reinforces the cell nucleus",
        "SLOT": 7,
        "NOMBRE_SLOT": " ",
        "HORA": "16:23:00",
        "NUMERO": 20
        },
        {
        "NOMBRE": "Lluís Torres-Hugas",
        "TITULO": "Finite-Speed Signal Propagation in Networked Systems and Large-Scale Brain Oscillations",
        "SLOT": 7,
        "NOMBRE_SLOT": " ",
        "HORA": "16:36:00",
        "NUMERO": 21
        },
            
            {
           "NOMBRE": " ",
           "TITULO": "",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "",
           "NUMERO": "-"
          },
            
       {
        "NOMBRE": "Sergio Testón Martínez",
        "TITULO": "Un acumulador hidráulico biológico: cómo el pepinillo del diablo, Ecballium elaterium, expulsa sus semillas",
        "SLOT": 8,
        "NOMBRE_SLOT": " ",
        "HORA": "16:50:00",
        "NUMERO": 22
       },
       {
        "NOMBRE": "Adrián Nadal Rosa",
        "TITULO": "Energetics of epithelial tissues",
        "SLOT": 8,
        "NOMBRE_SLOT": " ",
        "HORA": "17:03:00",
        "NUMERO": 23
       },
       {
        "NOMBRE": "Cristóbal Romero-Guzmán",
        "TITULO": "Accurate Prediction of CO2 Hydrate Stability and Three-Phase Coexistence Using Molecular Simulations",
        "SLOT": 8,
        "NOMBRE_SLOT": " ",
        "HORA": "17:16:00",
        "NUMERO": 24
       },
       
       
          {
           "NOMBRE": " ",
           "TITULO": "Descanso",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "17:30:00",
           "NUMERO": "-"
          },
       
       
       {
        "NOMBRE": "Daniel Tellez Calle",
        "TITULO": "Hydrodynamics of ultra-confined systems",
        "SLOT": 9,
        "NOMBRE_SLOT": " ",
        "HORA": "17:50:00",
        "NUMERO": 25
       },
       {
        "NOMBRE": "Diego Mazo Durán",
        "TITULO": "Physical constraints as cellular signaling regulators",
        "SLOT": 9,
        "NOMBRE_SLOT": " ",
        "HORA": "18:03:00",
        "NUMERO": 26
       },
       {
        "NOMBRE": "Francisco Javier Marín Rodríguez",
        "TITULO": "Synchronization in Coevolving Kuramoto Networks with Conformists and Contrarians",
        "SLOT": 9,
        "NOMBRE_SLOT": " ",
        "HORA": "18:16:00",
        "NUMERO": 27
       },
       
       {
           "NOMBRE": " ",
           "TITULO": "",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "",
           "NUMERO": "-"
          },
        
          {
            "NOMBRE": "Ruben Rodríguez Casañ",
            "TITULO": "Optimizing River Networks for Flood Risk Reduction",
            "SLOT": 10,
            "NOMBRE_SLOT": " ",
            "HORA": "18:30:00",
            "NUMERO": 28
           },
           {
            "NOMBRE": "David March Pons",
            "TITULO": "Symmetry breaking in collective decision-making through higher-order interactions",
            "SLOT": 10,
            "NOMBRE_SLOT": "",
            "HORA": "18:43",
            "NUMERO": 29
           },
           {
            "NOMBRE": "Ylann Rouzaire",
            "TITULO": "Topological defects in 2D active models",
            "SLOT": 10,
            "NOMBRE_SLOT": " ",
            "HORA": "18:56",
            "NUMERO": 30
           },
       
]


const participantes3 = [
    {
        "NOMBRE": "Pedro Jiménez González",
        "TITULO": "Leveraging chaos in the training of artificial neural networks",
        "SLOT": 11,
        "NOMBRE_SLOT": " ",
        "HORA": "15:30:00",
        "NUMERO": 31
       },
       {
        "NOMBRE": "Leo Pérez Peña",
        "TITULO": "The role of autocatalytic chemistry on protocell growth",
        "SLOT": 11,
        "NOMBRE_SLOT": " ",
        "HORA": "15:43:00",
        "NUMERO": 32
       },
       {
        "NOMBRE": "Gemma Navarro Martínez",
        "TITULO": "Physical Growth Constraints Modulate Proliferation–Differentiation Dynamics During Zebrafish Development",
        "SLOT": 11,
        "NOMBRE_SLOT": " ",
        "HORA": "15:56:00",
        "NUMERO": 33
       },
       
       {
           "NOMBRE": " ",
           "TITULO": "",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "",
           "NUMERO": "-"
          },
       
        {
        "NOMBRE": "Carlotta Nunzi",
        "TITULO": "Lotka-Volterra system with random carrying capacities",
        "SLOT": 12,
        "NOMBRE_SLOT": " ",
        "HORA": "16:10:00",
        "NUMERO":34
        },
        {
        "NOMBRE": "Mikel Ocio Moliner",
        "TITULO": "Criticality in in silico and in vitro neuronal networks",
        "SLOT": 12,
        "NOMBRE_SLOT": " ",
        "HORA": "16:23:00",
        "NUMERO": 35
        },
        {
        "NOMBRE": "Alberto Martinez-Serra",
        "TITULO": "A machine learning tool to analyze spectroscopic changes in high-dimensional data",
        "SLOT": 12,
        "NOMBRE_SLOT": " ",
        "HORA": "16:36:00",
        "NUMERO": 36
        },
           
           {
           "NOMBRE": " ",
           "TITULO": "",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "",
           "NUMERO": "-"
          },
           
       {
        "NOMBRE": "Carlos Ríos Monje",
        "TITULO": "Maximizing power of an irreversible Otto cycle for a harmonically confined Brownian particle",
        "SLOT": 13,
        "NOMBRE_SLOT": " ",
        "HORA": "16:50:00",
        "NUMERO": 37
       },
       {
        "NOMBRE": "Sahily Estradé",
        "TITULO": "TDA to characterize a 3D granular sample",
        "SLOT": 13,
        "NOMBRE_SLOT": " ",
        "HORA": "17:03:00",
        "NUMERO": 38
       },
       {
        "NOMBRE": "Alfonso de Jesús Navas Gómez",
        "TITULO": "Inferring Higher-Order Couplings with Neural Networks",
        "SLOT": 13,
        "NOMBRE_SLOT": " ",
        "HORA": "17:16:00",
        "NUMERO": 39
       },
       
          {
           "NOMBRE": " ",
           "TITULO": "Descanso",
           "SLOT": "-",
           "NOMBRE_SLOT": "-",
           "HORA": "17:30:00",
           "NUMERO": "-"
          },
       {
        "NOMBRE": "Nuria Richer Gusano",
        "TITULO": "Adaptive and Trustworthy Load Forecasting via Online Expert Selection and Conformal Prediction",
        "SLOT": 14,
        "NOMBRE_SLOT": " ",
        "HORA": "17:50:00",
        "NUMERO": 40
       },
       {
        "NOMBRE": "Manuel Mayo",
        "TITULO": "Cooling mechanism controls motility-induced phase separation in inertial active liquids",
        "SLOT": 14,
        "NOMBRE_SLOT": " ",
        "HORA": "18:03:00",
        "NUMERO": 41
       },
       {
        "NOMBRE": "Gabriel Mallku Guzmán Schiller",
        "TITULO": "Self-Sustained Macroscopic Dynamics in an Asymmetric Hopfield Network with Plasticity",
        "SLOT": 14,
        "NOMBRE_SLOT": " ",
        "HORA": "18:16:00",
        "NUMERO": 42
       },

]