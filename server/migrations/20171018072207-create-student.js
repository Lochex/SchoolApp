module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Students', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    regno: {
      type: Sequelize.STRING,
      allowNull: false
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    middlename: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isEmail: {
          msg: 'Email address must be valid'
        }
      }
    },
    gender: {
      type: Sequelize.ENUM,
      values: ['male', 'female'],
      allowNull: true,
      validate: {
        isIn: [['male', 'female']]
      }
    },
    dob: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    parent_no: {
      type: Sequelize.STRING,
      allowNull: true
    },
    parent_no2: {
      type: Sequelize.STRING,
      allowNull: true
    },
    parentname: {
      type: Sequelize.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Students')
};
