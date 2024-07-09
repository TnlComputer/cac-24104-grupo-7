package com.ar.apimovies;

import java.sql.Date;
import java.sql.Time;

public class Pelicula {

  private Long idPelicula;
  private String titulo;
  private String imagen;
  private String genero;
  private String director;
  private Time duracion;
  private Date estreno;
  private String descripcion;
  private Boolean isActive;

  public Pelicula() {

  }

  public Pelicula(Long idPelicula, String titulo, String imagen, String genero, String director, Time duracion,
      Date estreno, String descripcion, Boolean isActive) {
    this.idPelicula = idPelicula;
    this.titulo = titulo;
    this.imagen = imagen;
    this.genero = genero;
    this.director = director;
    this.duracion = duracion;
    this.estreno = estreno;
    this.descripcion = descripcion;
    this.isActive = isActive;
  }



  public Long getIdPelicula() {
    return idPelicula;
  }

  public void setIdPelicula(Long idPelicula) {
    this.idPelicula = idPelicula;
  }

  public String getTitulo() {
    return titulo;
  }

  public void setTitulo(String titulo) {
    this.titulo = titulo;
  }

  public String getImagen() {
    return imagen;
  }

  public void setImagen(String imagen) {
    this.imagen = imagen;
  }

  public String getGenero() {
    return genero;
  }

  public void setGenero(String genero) {
    this.genero = genero;
  }

  public String getDirector() {
    return director;
  }

  public void setDirector(String director) {
    this.director = director;
  }

  public Time getDuracion() {
    return duracion;
  }

  public void setDuracion(Time duracion) {
    this.duracion = duracion;
  }

  public Date getEstreno() {
    return estreno;
  }

  public void setEstreno(Date estreno) {
    this.estreno = estreno;
  }

  public String getDescripcion() {
    return descripcion;
  }

  public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
  }

  public Boolean getIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

  @Override
  public String toString() {
    return "Pelicula [idPelicula=" + idPelicula + ", titulo=" + titulo + ", imagen=" + imagen + ", genero=" + genero
        + ", director=" + director + ", duracion=" + duracion + ", estreno=" + estreno + ", descripcion=" + descripcion
        + ", isActive=" + isActive + "]";
  }


}
