package com.ar.apimovies;

import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/usuarios")
public class UsuarioServlet extends HttpServlet {

  private UsuarioDAO usuarioDAO = new UsuarioDAO();
  private ObjectMapper objectMapper = new ObjectMapper();

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    setupResponseHeaders(resp);

    try {
      req.setCharacterEncoding("UTF-8");
      resp.setCharacterEncoding("UTF-8");

      Usuario usuario = objectMapper.readValue(req.getInputStream(), Usuario.class);
      Long idUsuario = usuarioDAO.insertUsuario(usuario);

      if (idUsuario != null) {
        String jsonResponse = objectMapper.writeValueAsString(idUsuario);
        resp.setContentType("application/json");
        resp.getWriter().write(jsonResponse);
        resp.setStatus(HttpServletResponse.SC_CREATED);
      } else {
        resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error inserting usuario");
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

      List<Usuario> usuarios = usuarioDAO.getAllUsuarios();
      String jsonResp = objectMapper.writeValueAsString(usuarios);

      resp.setContentType("application/json");
      resp.getWriter().write(jsonResp);
    } catch (Exception e) {
      resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error fetching usuarios");
      e.printStackTrace();
    }
  }

  @Override
  protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    setupResponseHeaders(resp);
    resp.setStatus(HttpServletResponse.SC_OK);
  }

  // ** edit y delete realizado por Maira ** //
  // **************** DO PUT *************** //
  @Override
  protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    setupResponseHeaders(resp);

    try {
      req.setCharacterEncoding("UTF-8");
      resp.setCharacterEncoding("UTF-8");

     Usuario usuario = objectMapper.readValue(req.getInputStream(),Usuario.class);
      boolean isUpdated = usuarioDAO.updateUsuario(usuario);

      if (isUpdated) {
        resp.setStatus(HttpServletResponse.SC_OK);
      } else {
        resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error updating usuarios");
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

      Usuario usuario = objectMapper.readValue(req.getInputStream(), Usuario.class);
      boolean isDeleted = usuarioDAO.deleteUsuario(usuario);

      if (isDeleted) {
        resp.setStatus(HttpServletResponse.SC_OK);
      } else {
        resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error deleting usuarios");
      }
    } catch (Exception e) {
      resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid request data");
      e.printStackTrace();
    }

  }

  private void setupResponseHeaders(HttpServletResponse resp) {
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
}
