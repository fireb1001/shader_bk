
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shaderConfigs', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		configName: {
			type: DataTypes.STRING(45),
			allowNull: false,
			defaultValue: '',
			field: 'config_name'
		},
		configValue: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'config_value'
		},
		configVerify: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'config_verify'
		},
		shaderName: {
			type: DataTypes.STRING(45),
			allowNull: false,
			defaultValue: '',
			field: 'shader_name'
		}
	}, {
		tableName: 'shader_configs',
		timestamps: false
	});
};
