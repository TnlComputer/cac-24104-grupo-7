package com.ar.apimovies;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class PeliculaDAO {

  public Long insertPelicula(Pelicula pelicula) {

    Conexion conexion = new Conexion();

    Statement stm = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    String insertPeliculaSql = "INSERT INTO pelicula (titulo, imagen, id_genero, id_director, duracion, estreno, descripcion, presupuesto, recaudacion, url_trailer, isActive, url_fb, url_x, url_ig, url_estudio) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    Connection cn = conexion.conectar();

    try {
      pstm = cn.prepareStatement(insertPeliculaSql);

      pstm.setString(1, insertPeliculaSql);
      pstm.setString(2, insertPeliculaSql);
      pstm.setString(3, insertPeliculaSql);
      pstm.setString(4, insertPeliculaSql);
      pstm.setString(5, insertPeliculaSql);
      pstm.setString(6, insertPeliculaSql);
      pstm.setString(7, insertPeliculaSql);
      pstm.setString(8, insertPeliculaSql);
      pstm.setString(9, insertPeliculaSql);
      pstm.setString(10, insertPeliculaSql);
      pstm.setString(11, insertPeliculaSql);
      pstm.setString(12, insertPeliculaSql);
      pstm.setString(13, insertPeliculaSql);
      pstm.setString(14, insertPeliculaSql);
      pstm.setString(15, insertPeliculaSql);

      pstm.executeUpdate();

    } catch (Exception e) {
      e.printStackTrace();
    }

    return null;
  }
}
