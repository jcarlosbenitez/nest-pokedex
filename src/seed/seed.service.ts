import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(@InjectModel(Pokemon.name)
  private readonly pokemonModel: Model<Pokemon>,
    private readonly axiosAdapter: AxiosAdapter
  ) {

  }

  async executeSeed() {
    // console.log(fetch)
    await this.pokemonModel.deleteMany({})

    const data = await this.axiosAdapter.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=1000')

    // const inserPromisesArray:Promise<Pokemon>[] = []1 solucion
    const pokemonToInsert: { name: string, no: number }[] = [] //2 solucion


    data.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no: number = +segments[segments.length - 2]
      const createPokemonDto = {
        name, no
      }
      pokemonToInsert.push(createPokemonDto)//2 solucion

      console.log({ name, no })
      //  inserPromisesArray.push(this.pokemonModel.create(createPokemonDto)) 1 solucion
      //const pokemon = await this.pokemonModel.create(createPokemonDto)

    })
    await this.pokemonModel.insertMany(pokemonToInsert)
    //await Promise.all(inserPromisesArray) 1 solucion
    return "Seed Execute";
  }


}
