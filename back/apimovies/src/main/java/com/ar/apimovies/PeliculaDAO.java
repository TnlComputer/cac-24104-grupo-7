package com.ar.apimovies;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

public class PeliculaDAO {

  public Long insertPelicula(Pelicula pelicula) {
    Conexion conexion = new Conexion();
    PreparedStatement pstm = null;
    ResultSet rs = null;
    String insertPeliculaSql = "INSERT INTO peliculas (titulo, imagen, genero, director, duracion, estreno, descripcion, isActive) VALUES (?,?,?,?,?,?,?,?)";

    Connection cn = conexion.conectar();

    try {
      pstm = cn.prepareStatement(insertPeliculaSql, PreparedStatement.RETURN_GENERATED_KEYS);

      pstm.setString(1, pelicula.getTitulo());
      pstm.setString(2, pelicula.getImagen());
      pstm.setString(3, pelicula.getGenero());
      pstm.setString(4, pelicula.getDirector());
      pstm.setTime(5, pelicula.getDuracion());
      pstm.setDate(6, pelicula.getEstreno());
      pstm.setString(7, pelicula.getDescripcion());
      pstm.setBoolean(8, true);

      int result = pstm.executeUpdate();

      if (result > 0) {
        rs = pstm.getGeneratedKeys();
        if (rs.next()) {
          System.out.println("Se cargo exitosamente una nueva pelicula");
          return rs.getLong(1);
        } else {
          System.out.println("Error al obtener ID de la pelicula");
          return null;
        }
      } else {
        System.out.println("Error al insertar la pelicula");
        return null;
      }

    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
  }

  public List<Pelicula> getAllPeliculas() {
    Conexion conexion = new Conexion();
    Connection cn = conexion.conectar();

    List<Pelicula> peliculas = new ArrayList<>();

    PreparedStatement pstm = null;
    ResultSet rs = null;

    String getAllPeliculasSql = "SELECT * FROM peliculas WHERE isActive=true";

    try {
      pstm = cn.prepareStatement(getAllPeliculasSql);
      rs = pstm.executeQuery();

      while (rs.next()) {
        Long idP = rs.getLong("id");
        String titu = rs.getString("titulo");
        String imag = rs.getString("imagen");
        String gene = rs.getString("genero");
        String dire = rs.getString("director");
        Time dura = rs.getTime("duracion");
        Date estr = rs.getDate("estreno");
        String desc = rs.getString("descripcion");
        Boolean isAct = rs.getBoolean("isActive");

        Pelicula pelicula = new Pelicula(idP, titu, imag, gene, dire, dura, estr, desc, isAct);

        peliculas.add(pelicula);
      }

    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
    return peliculas;
  }

  public boolean updatePelicula(Pelicula pelicula) {
    boolean isUpdated = false;
    Conexion conexion = new Conexion();
    Connection cn = conexion.conectar();
    PreparedStatement pstm = null;
    String updatePeliculaSql = "UPDATE peliculas SET titulo=?, imagen=?, genero=?, director=?, duracion=?, estreno=?, descripcion=? WHERE id=?";

    try {
      pstm = cn.prepareStatement(updatePeliculaSql);

      pstm.setString(1, pelicula.getTitulo());
      pstm.setString(2, pelicula.getImagen());
      pstm.setString(3, pelicula.getGenero());
      pstm.setString(4, pelicula.getDirector());
      pstm.setTime(5, pelicula.getDuracion());
      pstm.setDate(6, pelicula.getEstreno());
      pstm.setString(7, pelicula.getDescripcion());
      pstm.setBoolean(8, pelicula.getIsActive());
      pstm.setLong(8, pelicula.getIdPelicula());

      int rowsAffected = pstm.executeUpdate();
      isUpdated = rowsAffected > 0;

    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      try {
        if (pstm != null)
          pstm.close();
        if (cn != null)
          cn.close();
      } catch (Exception e) {
        e.printStackTrace();
      }
    }

    return isUpdated;
  }

  public boolean deletePelicula(Pelicula pelicula) {

    boolean isDeleted = false;

    Conexion conexion = new Conexion();
    Connection cn = null;
    String deleteUsuarioSql = "UPDATE peliculas SET isActive = false WHERE id = ?";

    PreparedStatement pstm = null;

    try {
      cn = conexion.conectar();
      pstm = cn.prepareStatement(deleteUsuarioSql);

      pstm.setLong(1, pelicula.getIdPelicula());
      // pstm.setBoolean(11, false);

      int rowsAffected = pstm.executeUpdate();
      isDeleted = rowsAffected > 0;

    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      try {
        if (pstm != null)
          pstm.close();
        if (cn != null)
          cn.close();
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
    return isDeleted;
  }

}
