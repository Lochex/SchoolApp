module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    regno: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middlename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Email address must be valid'
        }
      }
    },
    gender: {
      type: DataTypes.ENUM,
      values: ['male', 'female'],
      allowNull: true,
      validate: {
        isIn: [['male', 'female']]
      }
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    parent_no: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parent_no2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parentname: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  // Student.associate = (models) => {

  // };
  return Student;
};
