
const infcarros = []
let imgPista
let i=0
let ganador=""
const arregloNombres =["carroverde", "carroamarillo"]

function setup() 
{
  	createCanvas(windowWidth, windowHeight);
}

function preload()
{	
	for (let i=0; i<2; i++) 
	{
		let carro = {
			nombre: arregloNombres[i],
			rutaImg: loadImage(`img/${i}.png`),
			posX: 700,
			posY: 540,
			velocidad: Math.floor(random(2, 17)),
			direccion: 1,
			vueltas: 0,
		}
		infcarros.push(carro)
	}

	imgPista= loadImage(`img/pista.jpg`)
}

function draw()
{
	background(imgPista)

	switch(infcarros[i].direccion)
	{
		case 1:
			GirarDerecha()
			image(infcarros[i].rutaImg, infcarros[i].posX+=infcarros[i].velocidad, infcarros[i].posY)
			
			if(infcarros[i].posX>=1100)
				infcarros[i].direccion=2
		break

		case 2:
			GirarArribaDerecha()
			image(infcarros[i].rutaImg, infcarros[i].posX+=infcarros[i].velocidad,infcarros[i].posY-=infcarros[i].velocidad)

			if(infcarros[i].posY<=412)
				infcarros[i].direccion=3
		break

		case 3:
			GirarArriba()
			image(infcarros[i].rutaImg, infcarros[i].posX, infcarros[i].posY-=infcarros[i].velocidad)

			if(infcarros[i].posY<=199)
				infcarros[i].direccion=4
		break

		case 4:
			GirarArribaIzquierda()
			image(infcarros[i].rutaImg, infcarros[i].posX-=infcarros[i].velocidad, infcarros[i].posY-=infcarros[i].velocidad)

			if(infcarros[i].posY<=102)
				infcarros[i].direccion=5
		break

		case 5:
			GirarIzquierda()
			image(infcarros[i].rutaImg, infcarros[i].posX-=infcarros[i].velocidad, infcarros[i].posY)

			if(infcarros[i].posX<=1041)
				infcarros[i].direccion=6
		break;

		case 6:
			GirarAbajoIzquierda()
			image(infcarros[i].rutaImg, infcarros[i].posX-=infcarros[i].velocidad, infcarros[i].posY+=infcarros[i].velocidad)

			if(infcarros[i].posY>=270)
				infcarros[i].direccion=7
		break;

		case 7:
			GirarIzquierda()
			image(infcarros[i].rutaImg, infcarros[i].posX-=infcarros[i].velocidad, infcarros[i].posY)

			if(infcarros[i].posX<=644)
				infcarros[i].direccion=8
		break;

		case 8:
			GirarArribaIzquierda()
			image(infcarros[i].rutaImg, infcarros[i].posX-=infcarros[i].velocidad, infcarros[i].posY-=infcarros[i].velocidad)

			if(infcarros[i].posY<=118)
				infcarros[i].direccion=9
		break;

		case 9:
			GirarIzquierda()
			image(infcarros[i].rutaImg, infcarros[i].posX-=infcarros[i].velocidad, infcarros[i].posY)

			if(infcarros[i].posX<=198)
				infcarros[i].direccion=10
		break;

		case 10:
			GirarAbajoIzquierda()
			image(infcarros[i].rutaImg, infcarros[i].posX-=infcarros[i].velocidad, infcarros[i].posY+=infcarros[i].velocidad)

			if(infcarros[i].posY>=215)
				infcarros[i].direccion=11
		break;

		case 11:
			GirarAbajo()
			image(infcarros[i].rutaImg, infcarros[i].posX, infcarros[i].posY+=infcarros[i].velocidad)

			if(infcarros[i].posY>=417)
				infcarros[i].direccion=12
		break;

		case 12:
			GirarAbajoDerecha()
			image(infcarros[i].rutaImg, infcarros[i].posX+=infcarros[i].velocidad, infcarros[i].posY+=infcarros[i].velocidad)

			if(infcarros[i].posY>=509)
				infcarros[i].direccion=13
		break;

		case 13:
			GirarDerecha()
			image(infcarros[i].rutaImg, infcarros[i].posX+=infcarros[i].velocidad, infcarros[i].posY)

			if(infcarros[i].posX>=319)
				infcarros[i].direccion=14
		break;

		case 14:
			GirarArribaDerecha()
			image(infcarros[i].rutaImg, infcarros[i].posX+=infcarros[i].velocidad, infcarros[i].posY-=infcarros[i].velocidad)

			if(infcarros[i].posY<=437)
				infcarros[i].direccion=15
		break;

		case 15:
			GirarDerecha()
			image(infcarros[i].rutaImg, infcarros[i].posX+=infcarros[i].velocidad, infcarros[i].posY)

			if(infcarros[i].posX>=520)
				infcarros[i].direccion=16
		break;

		case 16:
			GirarAbajoDerecha()
			image(infcarros[i].rutaImg, infcarros[i].posX+=infcarros[i].velocidad, infcarros[i].posY+=infcarros[i].velocidad)

			if(infcarros[i].posY>=540)
				infcarros[i].direccion=17
		break;

		case 17:
			GirarDerecha()
			image(infcarros[i].rutaImg, infcarros[i].posX+=infcarros[i].velocidad, infcarros[i].posY)

			if(infcarros[i].posX>=745)
			{
				infcarros[i].direccion=1
				infcarros[i].vueltas++
				
				if(infcarros[i].vueltas==3)
				{
					if(ganador=="")
					{
						ganador=infcarros[i].nombre
						

						alert("Ganador "+ganador)
					}

					infcarros[i].direccion=18
				}
			}
		break;

		case 18:
				image(infcarros[i].rutaImg, infcarros[i].posX, infcarros[i].posY)
		break;
	}
	
	i++

	if(i===infcarros.length)
		i=0
}

function GirarArriba()
{
	translate(infcarros[i].posX, infcarros[i].posY)
	rotate(4.7)
	image(infcarros[i].rutaImg, 0, 0)
}

function GirarAbajo()
{
	translate(infcarros[i].posX, infcarros[i].posY)
	rotate(1.6)
	image(infcarros[i].rutaImg, 0, 0)
}

function GirarIzquierda()
{
	translate(infcarros[i].posX, infcarros[i].posY)
	rotate(3.1)
	image(infcarros[i].rutaImg, 0, 0)
}

function GirarDerecha()
{
	translate(infcarros[i].posX, infcarros[i].posY)
	rotate(0)
	image(infcarros[i].rutaImg, 0, 0)
}

function GirarAbajoIzquierda()
{
	translate(infcarros[i].posX, infcarros[i].posY)
	rotate(2.1)
	image(infcarros[i].rutaImg, 0, 0)
}

function GirarAbajoDerecha()
{
	translate(infcarros[i].posX, infcarros[i].posY)
	rotate(1.1)
	image(infcarros[i].rutaImg, 0, 0)
}

function GirarArribaIzquierda()
{
	translate(infcarros[i].posX, infcarros[i].posY)
	rotate(4)
	image(infcarros[i].rutaImg, 0, 0)
}

function GirarArribaDerecha()
{
	translate(infcarros[i].posX, infcarros[i].posY)
	rotate(6)
	image(infcarros[i].rutaImg, 0, 0)
}

