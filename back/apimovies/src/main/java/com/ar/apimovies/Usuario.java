package com.ar.apimovies;

import java.sql.Date;
import java.sql.Timestamp;

public class Usuario {

  private Long idUsuario;
  private int isAdmin;
  private int isActive;
  private String nombre;
  private String apellido;
  private String email;
  private String clave;
  private Date fecha_nacimiento;
  private int id_pais;
  private Timestamp created_at;
  private Timestamp updated_at;

  public Usuario() {
  }

  public Usuario(Long idUsuario, int isAdmin, int isActive, String nombre, String apellido, String email, String clave,
      Date fecha_nacimiento, int id_pais, Timestamp created_at, Timestamp updated_at) {
    this.idUsuario = idUsuario;
    this.isAdmin = isAdmin;
    this.isActive = isActive;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.clave = clave;
    this.fecha_nacimiento = fecha_nacimiento;
    this.id_pais = id_pais;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  public Long getId() {
    return idUsuario;
  }

  public void setId(Long idUsuario) {
    this.idUsuario = idUsuario;
  }

  public int getIsAdmin() {
    return isAdmin;
  }

  public void setIsAdmin(int isAdmin) {
    this.isAdmin = isAdmin;
  }

  public int getIsActive() {
    return isActive;
  }

  public void setIsActive(int isActive) {
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

  public Date getFecha_nacimiento() {
    return fecha_nacimiento;
  }

  public void setFecha_nacimiento(Date fecha_nacimiento) {
    this.fecha_nacimiento = fecha_nacimiento;
  }

  public int getId_pais() {
    return id_pais;
  }

  public void setId_pais(int id_pais) {
    this.id_pais = id_pais;
  }

  public Timestamp getCreated_at() {
    return created_at;
  }

  public void setCreated_at(Timestamp created_at) {
    this.created_at = created_at;
  }

  public Timestamp getUpdated_at() {
    return updated_at;
  }

  public void setUpdated_at(Timestamp updated_at) {
    this.updated_at = updated_at;
  }

  @Override
  public String toString() {
    return "Usuario [idUsuario=" + idUsuario + ", isAdmin=" + isAdmin + ", isActive=" + isActive + ", nombre=" + nombre
        + ", apellido=" + apellido + ", email=" + email + ", clave=" + clave + ", fecha_nacimiento=" + fecha_nacimiento
        + ", id_pais=" + id_pais + ", created_at=" + created_at + ", updated_at=" + updated_at + "]";
  }

}
