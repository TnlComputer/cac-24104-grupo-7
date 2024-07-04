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

      pstm.setString(1, pelicula.getTitulo());
      pstm.setString(2, pelicula.getImagen());
      pstm.setLong(3, pelicula.getId_genero());
      pstm.setLong(4, pelicula.getId_director());
      pstm.setTime(5, pelicula.getDuracion());
      pstm.setDate(6, pelicula.getEstreno());
      pstm.setString(7, pelicula.getDescripcion());
      pstm.setDouble(8, pelicula.getPresupuesto());
      pstm.setDouble(9, pelicula.getRecaudacion());
      pstm.setString(10, pelicula.getUrl_trailer());
      pstm.setBoolean(11, pelicula.getIsActive());
      pstm.setString(12, pelicula.getUrl_fb());
      pstm.setString(13, pelicula.getUrl_x());
      pstm.setString(14, pelicula.getUrl_ig());
      pstm.setString(15, pelicula.getUrl_estudio());

      pstm.executeUpdate();

    } catch (Exception e) {
      e.printStackTrace();
    }

    return null;
  }
}
