package com.ar.apimovies;

import java.sql.Connection;

public class TestConexion {

  public static void main(String[] args) {
    Conexion conexion = new Conexion();
    Connection conn = null;

    try {
      conn = conexion.conectar();
      if (conn != null) {
        System.out.println("Conexión realizada con éxito");
        // Realiza operaciones con la base de datos
      } else {
        System.out.println("Error al conectar con la base de datos");
      }
    } finally {
      Conexion.cerrarConexion(conn);
    }
  }
}
