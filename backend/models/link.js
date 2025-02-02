module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    originalUrl: DataTypes.STRING,
    shortCode: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });

  Link.associate = models => {
    Link.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Link;
};