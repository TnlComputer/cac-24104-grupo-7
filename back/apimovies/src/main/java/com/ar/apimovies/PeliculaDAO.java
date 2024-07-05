package com.ar.apimovies;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
// import java.sql.Statement;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

public class PeliculaDAO {

  public Long insertPelicula(Pelicula pelicula) {

    Conexion conexion = new Conexion();

    // Statement stm = null;
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

  /**
   * @return
   */
  public List<Pelicula> getAllPeliculas() {
    Conexion conexion = new Conexion();
    Connection cn = conexion.conectar();

    List<Pelicula> peliculas = new ArrayList<>();

    // Statement stm = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;

    String getAllPeliculasSql = "SELECT * FROM peliculas";

    try {

      pstm = cn.prepareStatement(getAllPeliculasSql);

      rs = pstm.executeQuery();

      while (rs.next()) {

        Long idP = rs.getLong("id");
        String titu = rs.getString("titulo");
        String imag = rs.getString("imagen");
        Long idGen = rs.getLong("id_genero");
        Long idDir = rs.getLong("id_director");
        Time dura = rs.getTime("duracion");
        Date estr = rs.getDate("estreno");
        String desc = rs.getString("descripcion");
        Double presu = rs.getDouble("presupuesto");
        Double recau = rs.getDouble("recaudacion");
        String urlT = rs.getString("url_trailer");
        Boolean isAct = rs.getBoolean("isActive");
        String urlFb = rs.getString("url_fb");
        String urlX = rs.getString("url_x");
        String urlIg = rs.getString("url_ig");
        String urlEstu = rs.getString("url_estudio");

        Pelicula pelicula = new Pelicula(idP, titu, imag, idGen, idDir, dura, estr, desc, presu, recau, urlT, isAct,
            urlFb, urlX, urlIg, urlEstu);

        peliculas.add(pelicula);
      }

    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
    return peliculas;
  }
}
