package com.ar.apimovies;

import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.SQLException;
import io.github.cdimascio.dotenv.Dotenv;

public class Conexion {

  private static final String CONTROLADOR = "com.mysql.cj.jdbc.Driver";
  private static final Dotenv dotenv = Dotenv.load();

  private static final String URL = dotenv.get("DB_URL");
  private static final String USER = dotenv.get("DB_USER");
  private static final String PASS = dotenv.get("DB_PASS");

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

  public static void cerrarConexion(Connection conexion) {
    if (conexion != null) {
      try {
        conexion.close();
        System.out.println("Conexión cerrada");
      } catch (SQLException e) {
        System.out.println("Error al cerrar la conexión");
        e.printStackTrace();
      }
    }
  }
}
