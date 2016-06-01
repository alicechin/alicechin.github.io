
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Rectangle;
import javax.swing.JComponent;
import java.awt.image.BufferedImage;

public class rectangle extends JComponent {
    public void paintComponent(Graphics g) {

        // Recover Graphics2D
        Graphics2D g2 = (Graphics2D)g;

        // Construct rectangle and draw
        Rectangle box = new Rectangle(5,10,20,30);
        g2.draw(box);

        // Move 15 units to the right and 25 units down
        box.translate(15,25);

        // Draw moved rectangle
        g2.draw(box);
    }

    public static void main(String[] args) {
        BufferedImage test = new BufferedImage(500, 500,
                BufferedImage.TYPE_INT_RGB);
        Graphics graph = test.getGraphics();
        rectangle x = new rectangle();
        x.paintComponent(graph);
    }
}