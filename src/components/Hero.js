import React from 'react'
import Skills from './Skills'
import Proyecto from './Proyecto'
import personal from '../Imagen/personal.png'
import educacion from '../Imagen/educacion.png'
import trabajo from '../Imagen/trabajo.png'


const Hero = () => {
  return (
  <div>
    <div class="hero min-h-screen">
      <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-width auto-cols-max">
          <h1 class="mb-5 text-5xl font-bold">Bienvenidos!</h1>
          <p class="mb-5">Hola Mundo! Mi nombre es Agustina y estoy iniciandome en este fascinante e infinito mundo de la programacion.</p>
    
  <div>
    <div class="collapse">
      <input type="checkbox" class="peer" /> 
        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Acerca de mi
        </div>
      <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
        <div class="carousel w-full">
          <div id="item1" class="carousel-item w-full">
            <img src={personal} class="w-full" />
          </div> 
          <div id="item2" class="carousel-item w-full">
            <img src={trabajo} class="w-full" />
          </div> 
          <div id="item3" class="carousel-item w-full">
            <img src={educacion} class="w-full" />
          </div> 
        </div> 

          <div class="flex justify-center w-full py-2 gap-2">
            <a href="#item1" class="btn btn-xs">Personal</a> 
            <a href="#item2" class="btn btn-xs">Laboral</a> 
            <a href="#item3" class="btn btn-xs">Educacion</a> 
          </div>
      </div>
    </div>

    <div class="collapse">
      <input type="checkbox" class="peer" /> 
        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Habilidades
        </div>
        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <div class="grid gap-4 grid-cols-3">
            <div class="col-span-3 px-10">
              <Skills/>
            </div>
          </div>
        </div>
    </div>

    <div class="collapse">
      <input type="checkbox" class="peer" /> 
        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Proyectos
        </div>
       <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <div class="container mx-auto px-16">
            <Proyecto/>
          </div>
        </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
  
  )
}

export default Hero




