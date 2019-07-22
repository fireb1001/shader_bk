import {ShaderConfigCtrl , ShaderConfigDAO } from './ctrl/ShaderConfigCtrl'

export default {
    User: {

    },
    Query: {
      user: async (parent, { id }, { db }, info) => db.users.findByPk(id),
      shaderNameConfigs: async (parent, { shaderName }, { db }, info) => {
        /**@type {import('sequelize').ModelType} */
        const shaderConfigs = db.shaderConfigs
        let confs = await ShaderConfigCtrl.getShaderNameConfigs(shaderName)
        console.log("confs",confs)
        return shaderConfigs.findAll({where: {shaderName: shaderName}})
      } 
    },
    Mutation: {
      createUser: (parent, { name, username, password }, { db }, info) => {
        console.log(name, username, password)
        /**@type {import('sequelize').ModelType} */
        const users = db.users
        return users.create({
            name: name,
            username: username,
            password: password
        })
      },
      setShaderConfig: async (parent, args , { db }, info) => {
        let shaderConfigDAO = new ShaderConfigDAO(args)
        let ok = await ShaderConfigCtrl.setShaderConfig(shaderConfigDAO)
        return ok ? true : false
      }
    }
  };