package fsj.clase.coneccion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

  private static final String CONTROLADOR = "com.mysql.cj.jdbc.Driver";
  // private static final String URL = "jdbc:mysql://localhost:3306/db_24104";
  private static final String URL = "jdbc:mysql://tnlcomputer:3306/tnlcom55_cac24104";
  private static final String USER = "tnlcomp55";
  private static final String PASS = "Camisa00!QW";

  static {
    try {
      Class.forName(CONTROLADOR);
      System.out.println("El Driver se cargo correctamente");
    } catch (ClassNotFoundException e) {
      System.out.println("Error al cargar el Driver JDBC");
      e.printStackTrace();
    }
  }

  public Connection conectar() {

    Connection conexion = null;

    try {

      conexion = DriverManager.getConnection(URL, USER, PASS);
      System.out.println("Conexión establecida");

    } catch (SQLException e) {

      System.out.println("Error al establecer la conexión con la base de datos");
      e.printStackTrace();
    }

    return conexion;
  }

}
