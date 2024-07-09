package com.ar.apimovies;

import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/peliculas")
public class PeliculaServlet extends HttpServlet {

  private PeliculaDAO peliculaDAO = new PeliculaDAO();
  private ObjectMapper objectMapper = new ObjectMapper();

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    setupResponseHeaders(resp);

    try {
      req.setCharacterEncoding("UTF-8");
      resp.setCharacterEncoding("UTF-8");

      Pelicula pelicula = objectMapper.readValue(req.getInputStream(), Pelicula.class);
      Long idPelicula = peliculaDAO.insertPelicula(pelicula);

      if (idPelicula != null) {
        String jsonResponse = objectMapper.writeValueAsString(idPelicula);
        resp.setContentType("application/json");
        resp.getWriter().write(jsonResponse);

        resp.setStatus(HttpServletResponse.SC_CREATED);
      } else {
        resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error inserting pelicula");
      }
    } catch (Exception e) {
      resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid request data");
      e.printStackTrace();
    }
  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    setupResponseHeaders(resp);

    try {
      req.setCharacterEncoding("UTF-8");
      resp.setCharacterEncoding("UTF-8");

      List<Pelicula> peliculas = peliculaDAO.getAllPeliculas();
      String jsonResp = objectMapper.writeValueAsString(peliculas);

      resp.setContentType("application/json");
      resp.getWriter().write(jsonResp);
    } catch (Exception e) {
      resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error fetching peliculas");
      e.printStackTrace();
    }
  }

  // ** edit y delete realizado por Maira ** //
  // **************** DO PUT *************** //
  @Override
  protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    setupResponseHeaders(resp);

    try {
      req.setCharacterEncoding("UTF-8");
      resp.setCharacterEncoding("UTF-8");

      Pelicula pelicula = objectMapper.readValue(req.getInputStream(), Pelicula.class);
      boolean isUpdated = peliculaDAO.updatePelicula(pelicula);

      if (isUpdated) {
        resp.setStatus(HttpServletResponse.SC_OK);
      } else {
        resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error updating peliculas");
      }
    } catch (Exception e) {
      resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid request data");
      e.printStackTrace();
    }

  }

  // *********** DO DELETE ************/
  @Override
  protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    setupResponseHeaders(resp);

    try {
      req.setCharacterEncoding("UTF-8");
      resp.setCharacterEncoding("UTF-8");

      Pelicula pelicula = objectMapper.readValue(req.getInputStream(), Pelicula.class);
      boolean isDeleted = peliculaDAO.deletePelicula(pelicula);

      if (isDeleted) {
        resp.setStatus(HttpServletResponse.SC_OK);
      } else {
        resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error deleting peliculas");
      }
    } catch (Exception e) {
      resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid request data");
      e.printStackTrace();
    }

  }


  @Override
  protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    setupResponseHeaders(resp);
    resp.setStatus(HttpServletResponse.SC_OK);
  }

  private void setupResponseHeaders(HttpServletResponse resp) {
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
}
