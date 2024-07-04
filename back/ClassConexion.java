package fsj.clase.coneccion;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class ClassConexion {

	public static void main(String[] args) {

		Conexion conexion = new Conexion();
		
		Statement stm = null;
		ResultSet rs = null;
		String query = "SELECT * FROM usuarios";
		
		int id;
		String name;
		String clave;
		
		Connection cn = conexion.conectar();
		
		try {
			
			stm = cn.createStatement();
			rs = stm.executeQuery(query);
			
			System.out.println("id  -  name  -  clave");
			
			while(rs.next()) {
				
				id = rs.getInt(1);
				name = rs.getString(2);
				clave = rs.getString(3);
				
				System.out.println(id + " - " + name + " - " + clave);
			}
			
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		
		try {
			if(cn != null) {
				cn.close();
			}
			if(stm != null) {
				stm.close();
			}
			if(rs != null) {
				rs.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}

}









