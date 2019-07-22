import db from "../models";

export class ShaderConfigDAO {
  id
  shaderName
  configName
  configValue

  constructor( data ){
    Object.assign(this, data)
  }
}

export class ShaderConfigCtrl {

  static async getShaderNameConfigs(shaderName) {
    /**@type {import('sequelize').ModelType} */
    const shaderConfigs = db.shaderConfigs
    return shaderConfigs.findAll({where: {shaderName: shaderName},raw: true})
  }

  /**@param {ShaderConfigDAO} dao */
  static async setShaderConfig(dao) {
    /**@type {import('sequelize').ModelType} */
    const shaderConfigs = db.shaderConfigs
    let foundConfig = await shaderConfigs.findOne({
      where: {configName: dao.configName, shaderName: dao.shaderName }
    })

    if(foundConfig) {
      foundConfig.configValue = dao.configValue
      return foundConfig.save()
    } else {
      let newConfig = shaderConfigs.build({
        configName: dao.configName,
        shaderName: dao.shaderName,
        configValue: dao.configValue
      })
      return newConfig.save()
    }
  }

}
