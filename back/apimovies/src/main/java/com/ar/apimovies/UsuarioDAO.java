package com.ar.apimovies;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDAO {
  public Long insertUsuario(Usuario usuario) {
    Conexion conexion = new Conexion();

    // Statement stm = null;
    PreparedStatement pstm = null;
    ResultSet rs = null;
    String insertUsuarioSql = "INSERT INTO usuarios (isAdmin, isActive, nombre, apellido, email, clave, fecha_nacimiento, id_pais) VALUES (?,?,?,?,?,?,?,?)";

    Connection cn = conexion.conectar();

    try {
      pstm = cn.prepareStatement(insertUsuarioSql,
          PreparedStatement.RETURN_GENERATED_KEYS);

      if (usuario.getIsAdmin() == null) {
        pstm.setBoolean(1, false);
      } else {
        pstm.setBoolean(1, true);
      }
      pstm.setBoolean(2, true);
      pstm.setString(3, usuario.getNombre());
      pstm.setString(4, usuario.getApellido());
      pstm.setString(5, usuario.getEmail());
      pstm.setString(6, usuario.getClave());
      pstm.setDate(7, usuario.getFecha_nacimiento());
      pstm.setInt(8, usuario.getId_pais());

      int result = pstm.executeUpdate();

      if (result > 0) {
        rs = pstm.getGeneratedKeys();
        if (rs.next()) {
          System.out.println("Se cargo exitosamente un nuevo usurio");
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
        Boolean isAdm = rs.getBoolean("isAdmin");
        Boolean isAct = rs.getBoolean("isActive");
        String nomb = rs.getString("nombre");
        String apell = rs.getString("apellido");
        String mail = rs.getString("email");
        String pass = rs.getString("clave");
        Date fecnac = rs.getDate("fecha_nacimiento");
        Integer idPais = rs.getInt("id_pais");

        Usuario usuario = new Usuario(idU, isAdm, isAct, nomb, apell, mail, pass, fecnac, idPais);

        usuarios.add(usuario);
      }

    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
    return usuarios;
  }

  public boolean updateUsuario(Usuario usuario) {
    boolean isUpdated = false;
    Conexion conexion = new Conexion();
    Connection cn = conexion.conectar();
    PreparedStatement pstm = null;
    String updateUsuarioSql = "UPDATE usuarios SET isAdmin=?, isActive=?, nombre=?, apellido=?, email=?, clave=?, fecha_nacimiento=?, id_pais=? WHERE id=?";

    try {
      pstm = cn.prepareStatement(updateUsuarioSql);

      pstm.setBoolean(1, usuario.getIsAdmin());
      pstm.setBoolean(2, usuario.getIsActive());
      pstm.setString(3, usuario.getNombre());
      pstm.setString(4, usuario.getApellido());
      pstm.setString(5, usuario.getEmail());
      pstm.setString(6, usuario.getClave());
      pstm.setDate(7, usuario.getFecha_nacimiento());
      pstm.setInt(8, usuario.getId_pais());
      pstm.setLong(9, usuario.getIdUsuario());

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

  public boolean deleteUsuario(Usuario usuario) {

    boolean isDeleted = false;

    Conexion conexion = new Conexion();
    Connection cn = null;
    String deleteUsuarioSql = "UPDATE usuarios SET isActive = false WHERE id = ?";

    PreparedStatement pstm = null;

    try {
      cn = conexion.conectar();
      pstm = cn.prepareStatement(deleteUsuarioSql);

      pstm.setLong(1, usuario.getIdUsuario());

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
