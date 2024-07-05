package com.ar.apimovies;

import java.sql.Date;
import java.sql.Time;

public class Pelicula {

  private Long idPelicula;
  private String titulo;
  private String imagen;
  private Long id_genero;
  private Long id_director;
  private Time duracion;
  private Date estreno;
  private String descripcion;
  private Double presupuesto;
  private Double recaudacion;
  private String url_trailer;
  private Boolean isActive;
  private String url_fb;
  private String url_x;
  private String url_ig;
  private String url_estudio;

  public Pelicula() {

  }

  public Pelicula(Long idPelicula, String titulo, String imagen, Long id_genero, Long id_director, Time duracion,
      Date estreno, String descripcion, Double presupuesto, Double recaudacion, String url_trailer, Boolean isActive,
      String url_fb, String url_x, String url_ig, String url_estudio) {
    this.idPelicula = idPelicula;
    this.titulo = titulo;
    this.imagen = imagen;
    this.id_genero = id_genero;
    this.id_director = id_director;
    this.duracion = duracion;
    this.estreno = estreno;
    this.descripcion = descripcion;
    this.presupuesto = presupuesto;
    this.recaudacion = recaudacion;
    this.url_trailer = url_trailer;
    this.isActive = isActive;
    this.url_fb = url_fb;
    this.url_x = url_x;
    this.url_ig = url_ig;
    this.url_estudio = url_estudio;
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

  public Long getId_genero() {
    return id_genero;
  }

  public void setId_genero(Long id_genero) {
    this.id_genero = id_genero;
  }

  public Long getId_director() {
    return id_director;
  }

  public void setId_director(Long id_director) {
    this.id_director = id_director;
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

  public Double getPresupuesto() {
    return presupuesto;
  }

  public void setPresupuesto(Double presupuesto) {
    this.presupuesto = presupuesto;
  }

  public Double getRecaudacion() {
    return recaudacion;
  }

  public void setRecaudacion(Double recaudacion) {
    this.recaudacion = recaudacion;
  }

  public String getUrl_trailer() {
    return url_trailer;
  }

  public void setUrl_trailer(String url_trailer) {
    this.url_trailer = url_trailer;
  }

  public Boolean getIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

  public String getUrl_fb() {
    return url_fb;
  }

  public void setUrl_fb(String url_fb) {
    this.url_fb = url_fb;
  }

  public String getUrl_x() {
    return url_x;
  }

  public void setUrl_x(String url_x) {
    this.url_x = url_x;
  }

  public String getUrl_ig() {
    return url_ig;
  }

  public void setUrl_ig(String url_ig) {
    this.url_ig = url_ig;
  }

  public String getUrl_estudio() {
    return url_estudio;
  }

  public void setUrl_estudio(String url_estudio) {
    this.url_estudio = url_estudio;
  }

  @Override
  public String toString() {
    return "Pelicula [idPelicula=" + idPelicula + ", titulo=" + titulo + ", imagen=" + imagen + ", id_genero="
        + id_genero + ", id_director=" + id_director + ", duracion=" + duracion + ", estreno=" + estreno
        + ", descripcion=" + descripcion + ", presupuesto=" + presupuesto + ", recaudacion=" + recaudacion
        + ", url_trailer=" + url_trailer + ", isActive=" + isActive + ", url_fb=" + url_fb + ", url_x=" + url_x
        + ", url_ig=" + url_ig + ", url_estudio=" + url_estudio + "]";
  }
}
