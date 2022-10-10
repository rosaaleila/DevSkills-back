import { PrismaClient, Usuario, LoginUsuario, UsuarioHabilidade, UsuarioStack, UsuarioTelefone } from "@prisma/client";
import bcrypt, { compare } from "bcrypt";
import Jwt from "jsonwebtoken";
import DeveloperData from "../../../interfaces/Developer";
import PhoneData from "../../../interfaces/DeveloperPhone";
import DeveloperStacks from "../../../interfaces/DeveloperStacks";
import DeveloperSkills from "../../../interfaces/DeveloperSkills";

const prisma = new PrismaClient();

export default class UserDeveloperModel {
  static async create({
    nome,
    email,
    cpf,
    data_nascimento,
    id_genero,
  }: DeveloperData): Promise<Usuario> {
      return await prisma.usuario.create({
        data: {
          nome,
          email,
          cpf,
          data_nascimento: new Date(data_nascimento),
          ativo: true,
          pontuacao_plataforma: 0,
          tag: "teste",
          genero: {
            connect: {
              id: id_genero,
            },
          },
        },
      });
  }

  static async findByCPF(cpf: string) : Promise<Usuario | null> {
  
      return await prisma.usuario.findUnique({
        where:{
          cpf,
        }})

  }

  static async findByEmail(email: string) : Promise<Usuario | null> {
    return await prisma.usuario.findFirst({
      where: {
        email,
      }})    
    }

  static async relatePhone({
    ddd,
    numero,
    id_tipo,
    id_usuario
  } : PhoneData) : Promise<UsuarioTelefone> {

      return await prisma.usuarioTelefone.create({
        data: {
          ddd,
          numero,
          tipoTelefone: {
            connect: {
              id: id_tipo
            }
          },
          usuario:{
            connect: {
              id: id_usuario
            }
          }
        },
      });
        
    }

  static async relateStacks({
    id_usuario,
    id_stack
  } : DeveloperStacks) : Promise<UsuarioStack> {
      
      return await prisma.usuarioStack.create({
        data:{
          idUsuario: id_usuario,
          idStack: id_stack,
        }});

  }

  static async relateSkills({
    id_usuario,
    id_habilidade,
  }: DeveloperSkills) : Promise<UsuarioHabilidade> {

      return await prisma.usuarioHabilidade.create({
        data:{
          idUsuario: id_usuario,
          idHabilidade: id_habilidade,
        }});

  }

  static async createLogin(password: string, id_usuario: number) : Promise<LoginUsuario> {
      return await prisma.loginUsuario.create({
        data: {
          senha: password,
          idUsuario: id_usuario
        },
      });   
  }

  static async findLogin(id_usuario: number) : Promise<LoginUsuario | null> {
      return await prisma.loginUsuario.findFirst({
        where:{
          idUsuario: id_usuario
        }
      })
  }

  static async updatePassword(id: number, password : string) : Promise<LoginUsuario> {
    return await prisma.loginUsuario.update({
      data:{
        senha: password,
      },
      where: {
        id: id
      }
    })
  } 
  
}
