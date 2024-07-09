package com.ar.apimovies;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDAO {
  public Long insertUsuario(Usuario usuario) {

    Conexion conexion = new Conexion();

    // Statement stm = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    String insertUsuarioSql = "INSERT INTO usuarios (isAdmin, isActive, nombre, apellido, email, clave, fecha_nacimiento, id_pais, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)";

    Connection cn = conexion.conectar();

    try {
      pstm = cn.prepareStatement(insertUsuarioSql);

      pstm.setInt(1, usuario.getIsAdmin());
      pstm.setInt(2, usuario.getIsActive());
      pstm.setString(3, usuario.getNombre());
      pstm.setString(4, usuario.getApellido());
      pstm.setString(5, usuario.getEmail());
      pstm.setString(6, usuario.getClave());
      pstm.setDate(7, usuario.getFecha_nacimiento());
      pstm.setInt(8, usuario.getId_pais());
      pstm.setTimestamp(9, usuario.getCreated_at());
      pstm.setTimestamp(10, usuario.getUpdated_at());

      int result = pstm.executeUpdate();

      if (result > 0) {
        rs = pstm.getGeneratedKeys();
        if (rs.next()) {
          System.out.println("Se cargo exitosamente un nuevp usurio");
          return rs.getLong(1);
        } else {
          System.out.println("Error al obtener ID del usuario");
          return null;
        }
      } else {
        System.out.println("Error al insertar el usuario");
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
  public List<Usuario> getAllUsuarios() {
    Conexion conexion = new Conexion();
    Connection cn = conexion.conectar();

    List<Usuario> usuarios = new ArrayList<>();

    // Statement stm = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;

    String getAllUsuariosSql = "SELECT * FROM usuarios WHERE isActive = true";

    try {

      pstm = cn.prepareStatement(getAllUsuariosSql);

      rs = pstm.executeQuery();

      while (rs.next()) {

        Long idU = rs.getLong("id");
        Integer isAdm = rs.getInt("isAdmin");
        Integer isAct = rs.getInt("isActive");
        String nomb = rs.getString("nombre");
        String apell = rs.getString("apellido");
        String mail = rs.getString("email");
        String pass = rs.getString("clave");
        Date fecnac = rs.getDate("fecha_nacimiento");
        Integer idPais = rs.getInt("id_pais");
        Timestamp creat = rs.getTimestamp("created_at");
        Timestamp updat = rs.getTimestamp("updated_at");

        Usuario usuario = new Usuario(idU, isAdm, isAct, nomb, apell, mail, pass, fecnac, idPais, creat, updat);

        usuarios.add(usuario);
      }

    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
    return usuarios;
  }

}
