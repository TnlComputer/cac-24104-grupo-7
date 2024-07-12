package com.ar.apimovies;

// import java.sql.Date;

public class Usuario {

  private Long idUsuario;
  private Boolean isAdmin;
  private Boolean isActive;
  private String nombre;
  private String apellido;
  private String email;
  private String clave;
  private String fecha_nacimiento;
  private String id_pais;

  public Usuario() {
  }

  public Usuario(Long idUsuario, Boolean isAdmin, Boolean isActive, String nombre, String apellido, String email,
      String clave, String fecha_nacimiento, String id_pais) {
    this.idUsuario = idUsuario;
    this.isAdmin = isAdmin;
    this.isActive = isActive;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.clave = clave;
    this.fecha_nacimiento = fecha_nacimiento;
    this.id_pais = id_pais;
  }

  public Long getIdUsuario() {
    return idUsuario;
  }

  public void setIdUsuario(Long idUsuario) {
    this.idUsuario = idUsuario;
  }

  public Boolean getIsAdmin() {
    return isAdmin;
  }

  public void setIsAdmin(Boolean isAdmin) {
    this.isAdmin = isAdmin;
  }

  public Boolean getIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public String getApellido() {
    return apellido;
  }

  public void setApellido(String apellido) {
    this.apellido = apellido;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getClave() {
    return clave;
  }

  public void setClave(String clave) {
    this.clave = clave;
  }

  public String getFecha_nacimiento() {
    return fecha_nacimiento;
  }

  public void setFecha_nacimiento(String fecha_nacimiento) {
    this.fecha_nacimiento = fecha_nacimiento;
  }

  public String getId_pais() {
    return id_pais;
  }

  public void setId_pais(String id_pais) {
    this.id_pais = id_pais;
  }

  @Override
  public String toString() {
    return "Usuario [idUsuario=" + idUsuario + ", isAdmin=" + isAdmin + ", isActive=" + isActive + ", nombre=" + nombre
        + ", apellido=" + apellido + ", email=" + email + ", clave=" + clave + ", fecha_nacimiento=" + fecha_nacimiento
        + ", id_pais=" + id_pais + "]";
  }

}
