  # Justicieros-Npm

>  ¿Con cuantas funcionos contamos en la version 2.2.0?
>
> Actualmente contamos con **32** funciones!
  

  - [ImageGenerator](#imagegenerator)
      - [Mods](#imagegeneratormods)
         - [ImageGeneratorTextoFortnite](#imagegeneratortextoFortnite)
         - [ImageGeneratorMissionPassed](#imagegeneratormissionpassed)
         - [ImageGeneratorWasted](#imagegeneratorwasted)
         - [ImageGeneratorTriggered](#imagegeneratortriggered)
         - [ImageGeneratorRainbow](#imagegeneratorrainbow)
         - [ImageGeneratorJail](#imagegeneratorjail)
         - [ImageGeneratorGlass](#imagegeneratorglass)
         - [ImageGeneratorComunismo](#imagegeneratorcomunismo)
  - [FilterGenerator](#filtergenerator) 
      - [Mods](#filtergeneratormods)
         - [FilterGeneratorThreshold](#filtergeneratorthreshold)
         - [FilterGeneratorSepia](#filtergeneratorsepia)
         - [FilterGeneratorRed](#filtergeneratorred)
         - [FilterGeneratorPixel](#filtergeneratorpixel)
         - [FilterGeneratorRed](#filtergeneratorred)
         - [FilterGeneratorInvertGreyScale](#filtergeneratorinvertgreyscale)
         - [FilterGeneratorInvert](#filtergeneratorinvert)
         - [FilterGeneratorGreyScale](#filtergeneratorgreyscale)
         - [FilterGeneratorGreen](#filtergeneratorgreen)
         - [FilterGeneratorBlurple](#filtergeneratorblurple)
         - [FilterGeneratorBlue](#filtergeneratorblue)
         - [FilterGeneratorBightness](#filtergeneratorbightness)
   - [MiselaousGenerator]
     - [Mods](#miselaousgeneratormods)
         - [MiselaousGeneratorLoliPolice](#miselaousgeneratorlolipolice)
         - [MiselaousGeneratorSimpCard](#miselaousgeneratorsimpcard)
         - [MiselaousGeneratorItSoStupid](#miselaousgeneratoritsostupid)
   - [Economia]
     - [EcoGlobal](#ecoglobal) 
        - [justicierosConnect](#justicierosconnect)  
        - [addMoneyGlobal](#addmoneyglobal)
        - [depMoneyGlobal](#depmoneyglobal)
        - [withMoneyGlobal](#withmoneyglobal)
        - [adminaddMoneyGlobal](#adminaddmoneyglobal)
        - [seeMoneyGlobal](#seemoneyglobal)
        - [seeMoneyBankGlobal](#seemoneybankglobal)
     - [EcoServidor]
        **PROXIMAMENTE** 
     - [Soporte](#soporte)    




## ImageGenerator

> Quieres una imagen con tu avatar con distintos estilos? Usa estas funciones para eso!

# ImageGeneratorMods

| Funcion | Descripcion |
| ------- | :---------: |
| ImageGeneratorTextoFortnite| Genera Una Imagen con un texto fuente Fortnite |
| ImageGeneratorMissionPassed | Genera tu avatar con el texto Mission Passed | 
| ImageGeneratorWasted | Genera una imagen con el texto Wasted |
| ImageGeneratorTriggered | Genera una imagen Triggered | 
| ImageGeneratorRainbow | Genera una imagen estilo arcoiris |
| ImageGeneratorJail | Genera una imagen con tu avatar tras las rejas | 
| ImageGeneratorGlass | Genera una imagen con tu avatar a travez de un cristal | 
| ImageGeneratorComunismo | Genera una imagen con la bandera del comunismo |  

## ImageGeneratorTextoFortnite


```js

const justicieros = require('justicieros-npm')


  const color = args[0]

  const texto = args[1]

  const image = justicieros.ImageGeneratorTextoFortnite(color, texto)


	message.channel.send({ files: [image]})

```


## ImageGeneratorMissionPassed


```js

const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.ImageGeneratorMissionPassed(user)


	message.channel.send({ files: [image]})

```


## ImageGeneratorWasted



```js

  const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.ImageGeneratorWasted(user)


	message.channel.send({ files: [image]})

```

# ImageGeneratorTriggered 

```js

  const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.ImageGeneratorTriggered(user)


	message.channel.send({ files: [image]})

```


## ImageGeneratorRainbow 


```js

  const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.ImageGeneratorRainbow(user)


	message.channel.send({ files: [image]})

```


## ImageGeneratorJail

```js

  const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.ImageGeneratorJail(user)


	message.channel.send({ files: [image]})

```


## ImageGeneratorGlass


```js

  const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.ImageGeneratorGlass(user)


	message.channel.send({ files: [image]})

```


## ImageGeneratorComunismo


```js

  const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.ImageGeneratorRainbow(user)


	message.channel.send({ files: [image]})

```


# FilterGenerator

> Quieres tu avatar con distintos filtros? pues usa este!

# FilerGeneratorMods


| Funcion | Descripcion |
| ------- | :---------: |
| FilterGeneratorThreshold | Genera una imagen en blanco y negro |
| FilterGeneratorSepia| Genera Una Imagen tipo sepia |
| FilterGeneratorRed | Genera una imagen color rojo | 
| FilterGeneratorPixel | Genera una imagen pixeleada |
| FilterGeneratorInvertGreyScale | Genera una imagen invertida pero a gris | 
| FilterGeneratorInvert | Genera una imagen con los colores invertidos | 
| FilterGeneratorGreyScale | Genera una imagen con los colores a gris | 
| FilterGeneratorGreen | Genera una imagen color verde|
| FilterGeneratorBlurple | Genera una imagen con el color Blurple |
| FilterGeneratorBlue | Genera una imagen con el color Azul |
| FilterGeneratorBightness | Genera una imagen brillante |  

# FilterGeneratorThreshold


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorThreshold(user)


	message.channel.send({ files: [image]})

```

# FilterGeneratorSepia


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorSepia(user)


	message.channel.send({ files: [image]})

```

# FilterGeneratorRed


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorRed(user)


	message.channel.send({ files: [image]})

```

# FilterGeneratorPixel


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorPixel(user)


	message.channel.send({ files: [image]})

```

# FilterGeneratorRed


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorRed(user)


	message.channel.send({ files: [image]})

```

# FilterGeneratorInvertGreyScale


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorInvertGreyScale(user)


	message.channel.send({ files: [image]})

```

# FilterGeneratorInvert


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorInvert(user)


	message.channel.send({ files: [image]})

```

# FilterGeneratorGreyScale


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorGreyScale(user)


	message.channel.send({ files: [image]})

```


# FilterGeneratorGreen


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorGreen(user)


	message.channel.send({ files: [image]})

```

# FilterGeneratorBlurple


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorBlurple(user)


	message.channel.send({ files: [image]})

```

# FilterGeneratorBlue


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorThreshold(user)


	message.channel.send({ files: [image]})

```

# FilterGeneratorBightness


```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.FilterGeneratorThreshold(user)


	message.channel.send({ files: [image]})

```

# MiselaousGeneratorMods

| Funcion | Descripcion |
| ------- | :---------: |
| MiselaousGeneratorLoliPolice | Hey! No trafiques lolis |
| MiselaousGeneratorSimpCard | Card para ser un simp |
| MiselaousGeneratorItSoStupid | Es estupido | 



# MiselaousGeneratorLoliPolice

```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.MiselaousGeneratorLoliPolice(user)


	message.channel.send({ files: [image]})

```


# MiselaousGeneratorSimpCard

```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.MiselaousGeneratorSimpCard(user)


	message.channel.send({ files: [image]})

```


# MiselaousGeneratorItSoStupid

```js

 const justicieros = require('justicieros-npm')

  const user = message.author

  const image = justicieros.MiselaousGeneratorItSoStupid(user)


	message.channel.send({ files: [image]})

```

# Economia

# EcoGlobal

| Funcion | Descripcion |
| ------- | :---------: |
|
| justicierosConnect | Conecta a la database [mongodb](https://mongodb.com) |
| addMoneyGlobal | Trabaja para conseguir dinero |
| depMoneyGlobal | Deposita el dinero en el banco |
| withMoneyGlobal | Saca dinero del banco | 
| adminaddMoneyGlobal | Agregar dinero a un usuario |
| adminremoveMoneyGlobal| Remueve dinero a un usuario |
| seeMoneyGlobal | Ve el dinero de un usuario |
| seeMoneyBankGlobal | Ve el dinero del banco de un usuario |
| removeMoneyGlobal | Remueve dinero a un usuario |

# justicierosConnect

> OJO! Esto solo se pone una vez (en tu archivo index.js o en el principal)

```js

const { justicierosConnect } = require('justicieros-npm')

justicierosConnect('<URL del mongodb>')

```

# addMoneyGlobal

```js
const justicierosNPM = require('justicieros-npm')

const user = message.author

let money = justicierosNPM.addMoneyGlobal(user, 500)

message.channel.send('Dinero ganado' + money)

```

# depMoneyGlobal

```js
const justicierosNPM = require('justicieros-npm')

const user = message.author

const dep = args[0]

let money = justicierosNPM.depMoneyGlobal(user, dep)

message.channel.send('Dinero depositado' + money)

```

# withMoneyGlobal

```js
const justicierosNPM = require('justicieros-npm')

const user = message.author

const dep = args[0]

let money = justicierosNPM.withMoneyGlobal(user, dep)

message.channel.send('Dinero sacado' + money)

```


# adminaddMoneyGlobal 

```js
const justicierosNPM = require('justicieros-npm')

const user = message.author

const dep = args[0]

let money = justicierosNPM.adminaddMoneyGlobal(user, dep)

message.channel.send('Dinero agregdo al usuario:' + money)

```

# adminremoveMoneyGlobal

```js
const justicierosNPM = require('justicieros-npm')

const user = message.author

const dep = args[0]

let money = justicierosNPM.adminremoveMoneyGlobal(user, dep)

message.channel.send('Dinero removido al usuario:' + money)

```

# seeMoneyGlobal

```js
const justicierosNPM = require('justicieros-npm')

const user = message.author


let money = justicierosNPM.seeMoneyGlobal(user)

message.channel.send('Dinero en la cartera' + money)

```

# seeMoneyBankGlobal

```js
const justicierosNPM = require('justicieros-npm')

const user = message.author


let money = justicierosNPM.seeMoneyBankGlobal(user)

message.channel.send('Dinero en el banco' + money)

```

# removeMoneyGlobal

```js
const justicierosNPM = require('justicieros-npm')

const user = message.author


let money = justicierosNPM.removeMoneyGlobal(user, 500)

message.channel.send('Dinero removido' + money)

```


# Soporte


> Algun error con la npm? o alguna sugerencia ? [Reportar aqui!:](https://dsc.gg/justicierosjs) 